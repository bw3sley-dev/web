import { ComponentProps } from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'disabled:opacity-50 inline-flex items-center gap-1.5 text-xs font-medium',

  variants: {
    variant: {
      default:
        'relative inline-flex flex-shrink-0 cursor-pointer items-center justify-center rounded border-none text-sm bg-slate-600 px-8 py-3 font-bold text-slate-200 transition-colors duration-200 ease-in-out hover:bg-slate-700',
      primary:
        'relative inline-flex flex-shrink-0 cursor-pointer items-center justify-center rounded border-none bg-lime-600 px-8 py-3 font-bold text-sm text-lime-950 transition-colors duration-200 ease-in-out hover:enabled:bg-lime-700 disabled:cursor-not-allowed disabled:select-none disabled:opacity-70',
    },

    size: {
      default: '',
      icon: 'p-1.5',
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, size, className })} />
}
