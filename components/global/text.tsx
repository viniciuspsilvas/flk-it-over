import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const variants = cva('', {
  variants: {
    status: {
      primary: 'text-primary-500 dark:text-primary-200',
      secondary: 'text-secondary-500 dark:text-secondary-200',
      tertiary: 'text-tertiary-500 dark:text-tertiary-200',
      success: 'text-success-500 dark:text-success-200',
      info: 'text-info-500 dark:text-info-200',
      warning: 'text-warning-500 dark:text-warning-200',
      danger: 'text-danger-500 dark:text-danger-400',
      basic: 'text-black-75 dark:text-gray-100',
      none: ''
    }
  },
  defaultVariants: {
    status: 'basic'
  }
})

// HTMLLabelElement | HTMLHeadingElement
export interface TextProps extends HTMLAttributes<any>, VariantProps<typeof variants> {
  category?:
    | 'p1'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | /* 's1' | 's2' | 'p1' | 'p2' | 'c1' | 'c2' | */ 'label'
    | 'small'
    | 'legend'
  children?: any
  // children?: string[] | string
  status?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger' | 'basic' | 'none' | null

  htmlFor?: string
}

export const Text = ({ category, className, children, status = 'basic', ...rest }: TextProps): JSX.Element => {
  switch (category) {
    case 'p1':
      return (
        <p {...rest} className={cn(variants({ status, className }))}>
          {children}
        </p>
      )
    case 'h1':
      return (
        <h1 className={cn('text-4xl md:text-5xl font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 {...rest} className={cn('text-3xl md:text-4xl font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 {...rest} className={cn('text-2xl md:text-3xl font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 {...rest} className={cn('text-xl md:text-2xl font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 {...rest} className={cn('text-lg md:text-xl font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6 {...rest} className={cn('text-base font-medium leading-tight', variants({ status, className }))}>
          {children}
        </h6>
      )
    case 'label':
      return (
        <label className={cn('label', variants({ status, className }))} {...rest}>
          <span className="label-text text-sm">{children}</span>
        </label>
      )
    case 'small':
      return (
        <small {...rest} className={cn(variants({ status, className }))}>
          {children}
        </small>
      )
    case 'legend':
      return (
        <legend {...rest} className={cn('text-sm', variants({ status, className }))}>
          {children}
        </legend>
      )
    default:
      return <span className={cn(variants({ status, className }))}>{children}</span>
  }
}
