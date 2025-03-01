import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Seite nicht gefunden</h2>
      <p className="mt-4 text-muted-foreground max-w-md">
        Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          Zurück zur Startseite
        </Link>
      </Button>
    </div>
  )
} 