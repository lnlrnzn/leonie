import type React from "react"
import Link from "next/link"
import { Button, type ButtonProps } from "@/components/ui/button"

interface LinkButtonProps extends ButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, className, target, rel, ...buttonProps }) => {
  const isExternal = href.startsWith("http") || href.startsWith("//")

  const linkProps = {
    href,
    className,
    target: target || (isExternal ? "_blank" : undefined),
    rel: rel || (isExternal ? "noopener noreferrer" : undefined),
  }

  if (isExternal) {
    return (
      <Button asChild {...buttonProps}>
        <a {...linkProps}>{children}</a>
      </Button>
    )
  }

  return (
    <Button asChild {...buttonProps}>
      <Link {...linkProps}>{children}</Link>
    </Button>
  )
}

export default LinkButton

