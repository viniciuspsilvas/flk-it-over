import * as React from 'react'

import { Text } from '@/components/global/text'
import Input from '@/components/ui/input'
import { VariantProps, cva } from 'class-variance-authority'
import ErrorMessage from '@/components/global/error-message'

const variants = cva('', {
  variants: {
    status: {
      primary: 'text-primary-500 dark:text-primary-200',
      secondary: 'text-secondary-500 dark:text-secondary-200',
      tertiary: 'text-tertiary-500 dark:text-tertiary-200',
      success: 'text-success-400',
      info: 'text-info-400',
      warning: 'text-warning-400',
      danger: 'text-danger-400',
      basic: 'text-gray-400',
      none: ''
    }
  },
  defaultVariants: {
    status: 'basic'
  }
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof variants> {
  errorMessage?: string
  label?: string
}

const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', status, placeholder, label, errorMessage, ...props }, ref) => {
    const statusFinal = errorMessage ? 'danger' : status

    return (
      <div className="relative my-2 w-full">
        {label && (
          <Text category="label" htmlFor={props.id} status={statusFinal}>
            {label}
          </Text>
        )}
        <Input
          type={type}
          placeholder={placeholder}
          status={statusFinal}
          className=" disabled:bg-gray-100 dark:disabled:bg-gray-800"
          ref={ref}
          {...props}
        />

        <ErrorMessage message={errorMessage} />
      </div>
    )
  }
)
InputText.displayName = 'InputText'

export default InputText
