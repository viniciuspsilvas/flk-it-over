import * as React from 'react'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'

export const variants = cva('', {
  variants: {
    status: {
      primary:
        'border-primary dark:border-primary focus:border-primary focus:dark:border-primary text-primary dark:text-primary placeholder-primary dark:placeholder-primary',
      secondary:
        'border-secondary dark:border-secondary focus:border-secondary focus:dark:border-secondary text-secondary dark:text-secondary placeholder-secondary dark:placeholder-secondary',
      tertiary:
        'border-tertiary dark:border-tertiary focus:border-tertiary focus:dark:border-tertiary text-tertiary dark:text-tertiary placeholder-tertiary dark:placeholder-tertiary',
      success:
        'border-success dark:border-success focus:border-success focus:dark:border-success text-success dark:text-success placeholder-success dark:placeholder-success',
      info: 'border-info dark:border-info focus:border-info focus:dark:border-info text-info dark:text-info placeholder-info dark:placeholder-info',
      warning:
        'border-warning dark:border-warning focus:border-warning focus:dark:border-warning text-warning dark:text-warning placeholder-warning dark:placeholder-warning',
      danger:
        'border-danger-500 dark:border-danger-400 focus:border-danger-600 focus:dark:border-danger text-danger dark:text-danger-400 placeholder-danger dark:placeholder-danger-400',
      basic:
        'border-gray-400 dark:border-gray-400 focus:border-black focus:dark:border-white text-gray-500 dark:text-white-40 placeholder-gray-400 dark:placeholder-white-40',
      none: ''
    }
  },
  defaultVariants: {
    status: 'basic'
  }
})

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof variants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, status, disabled, ...props }, ref) => {
  return (
    <input
      type={type}
      disabled={disabled}
      className={cn(
        `block px-2.5 pb-2.5 pt-3 w-full text-sm rounded-md border border-input  focus:ring-0 focus:outline-none ${
          disabled ? 'opacity-50 cursor-not-allowed ' : 'bg-transparent'
        }`,
        variants({ status, className })
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export default Input
