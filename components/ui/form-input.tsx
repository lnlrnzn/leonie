"use client"

import { Input } from "@/components/ui/input"
import { forwardRef } from "react"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props, ref) => {
    return (
      <div suppressHydrationWarning>
        <Input {...props} ref={ref} />
      </div>
    )
  }
)

FormInput.displayName = "FormInput" 