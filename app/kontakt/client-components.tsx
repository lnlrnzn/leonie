"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useEffect, useState, createContext, useContext } from "react"
import { CheckCircle, Loader2 } from "lucide-react" // Import icons for status

// Context for sharing animation state between parent and children
const HeroSectionContext = createContext({ shouldAnimateImmediately: false });

export function ClientContactCard({
  icon,
  title,
  content,
  linkText,
  linkHref,
  delay
}: {
  icon: React.ReactNode
  title: string
  content: React.ReactNode
  linkText?: string
  linkHref?: string
  delay: number
}) {
  // Use the hero section context
  const { shouldAnimateImmediately } = useContext(HeroSectionContext);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For rows in the second section, animate immediately with staggered delay
  useEffect(() => {
    if (shouldAnimateImmediately) {
      // Stagger the animations slightly based on index
      const timer = setTimeout(() => setShouldAnimate(true), 100 + delay * 50);
      return () => clearTimeout(timer);
    }
  }, [shouldAnimateImmediately, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      {...(shouldAnimateImmediately 
        ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 } }
      )}
      transition={{ duration: 0.25 }}
      className="rounded-xl border bg-background p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">{icon}</div>
        <div className="space-y-2">
          <h3 className="font-medium">{title}</h3>
          <div className="text-muted-foreground">{content}</div>
          {linkText && linkHref && (
            <Button variant="link" className="px-0 h-auto mt-2" asChild>
              <a href={linkHref}>{linkText}</a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ClientContactForm() {
  // Form states
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Form field states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form - this is in addition to HTML5 validation
    if (!firstName || !lastName || !email || !subject || !message || !termsAccepted) {
      setFormStatus('error');
      setErrorMessage('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }

    // Set form to submitting state
    setFormStatus('submitting');
    
    // Current date in ISO format
    const currentDate = new Date().toISOString();
    
    // Prepare form data in a structure optimized for make.com
    const formData = {
      // Contact information
      contact: {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`.trim(),
        email,
        phone: phone || "Nicht angegeben",
      },
      // Request details
      request: {
        subject,
        message,
        date: currentDate,
        formattedDate: new Date().toLocaleDateString('de-DE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      },
      // Metadata
      meta: {
        source: window.location.pathname,
        url: window.location.href,
        timestamp: currentDate,
        termsAccepted: termsAccepted
      }
    };
    
    try {
      // Send data to make.com webhook
      const response = await fetch('https://hook.eu2.make.com/5mxj2n0ahdjp0e5dyriwed8wh9clsh2c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Success state
        setFormStatus('success');
        console.log('Form submitted successfully to make.com');
        
        // Reset form after successful submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
        setTermsAccepted(false);
      } else {
        // Error state with more detailed information
        const errorText = await response.text().catch(() => 'Unknown error');
        console.error('Form submission error:', response.status, errorText);
        setFormStatus('error');
        setErrorMessage(`Es gab ein Problem bei der Übermittlung (${response.status}). Bitte versuchen Sie es später noch einmal.`);
      }
    } catch (error) {
      // Network or other error
      console.error('Form submission network error:', error);
      setFormStatus('error');
      setErrorMessage('Es gab ein technisches Problem mit der Verbindung. Bitte versuchen Sie es später noch einmal.');
    }
  };

  // Reset form status after some time when showing success/error
  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        if (formStatus === 'success') {
          // Keep success state longer
          setTimeout(() => setFormStatus('idle'), 5000);
        } else {
          setFormStatus('idle');
        }
        setErrorMessage(null);
      }, formStatus === 'error' ? 5000 : 8000);
      
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl border bg-background p-6 md:p-8 shadow-sm"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Schreiben Sie Mir</h2>
          <p className="text-muted-foreground">
            Füllen Sie das Formular aus und ich melde mich schnellstmöglich bei Ihnen.
          </p>
        </div>

        {/* Success message */}
        {formStatus === 'success' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 flex items-start"
          >
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium">Anfrage erfolgreich gesendet!</h3>
              <p className="mt-1 text-sm">Vielen Dank für Ihre Nachricht. Leonie wird sich so schnell wie möglich bei Ihnen melden.</p>
            </div>
          </motion.div>
        )}

        {/* Error message */}
        {formStatus === 'error' && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4"
          >
            <h3 className="font-medium">Es ist ein Fehler aufgetreten</h3>
            <p className="mt-1 text-sm">{errorMessage || 'Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.'}</p>
          </motion.div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Vorname
              </label>
              <input
                id="first-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Max"
                required
                autoComplete="given-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Nachname
              </label>
              <input
                id="last-name"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Mustermann"
                required
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={formStatus === 'submitting' || formStatus === 'success'}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="max.mustermann@example.com"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={formStatus === 'submitting' || formStatus === 'success'}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="+49 123 4567890"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={formStatus === 'submitting' || formStatus === 'success'}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Betreff
            </label>
            <input
              id="subject"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Terminanfrage"
              required
              autoComplete="off"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={formStatus === 'submitting' || formStatus === 'success'}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Nachricht
            </label>
            <textarea
              id="message"
              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Ihre Nachricht an uns..."
              required
              autoComplete="off"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={formStatus === 'submitting' || formStatus === 'success'}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              disabled={formStatus === 'submitting' || formStatus === 'success'}
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              Ich akzeptiere die <Link href={{ pathname: "/datenschutz" }} className="text-primary underline">Datenschutzerklärung</Link>
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={formStatus === 'submitting' || formStatus === 'success'}
          >
            {formStatus === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Wird gesendet...
              </>
            ) : formStatus === 'success' ? (
              'Nachricht gesendet'
            ) : (
              'Nachricht senden'
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}

export function ClientFaqItem({
  question,
  answer,
  index
}: {
  question: string
  answer: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      className="rounded-lg border p-6"
    >
      <h3 className="font-medium">{question}</h3>
      <p className="mt-2 text-muted-foreground">{answer}</p>
    </motion.div>
  )
}

export function ClientContactSection({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode
}) {
  // Check if this is a hero/top section (default to false if className is undefined)
  const isHeroSection = className?.includes('pt-') ?? false;
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  // For hero sections, trigger animation immediately
  useEffect(() => {
    if (isHeroSection) {
      // Small timeout to ensure DOM is ready
      const timer = setTimeout(() => setShouldAnimate(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isHeroSection]);

  return (
    <HeroSectionContext.Provider value={{ shouldAnimateImmediately: isHeroSection && shouldAnimate }}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        {...(isHeroSection 
          ? { animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 } }
          : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
        )}
        transition={{ duration: 0.4 }}
        className={className}
      >
        <div className="container px-4 md:px-6">
          {children}
        </div>
      </motion.section>
    </HeroSectionContext.Provider>
  )
} 