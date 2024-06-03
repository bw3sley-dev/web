import {
  ComponentProps,
  createContext,
  ReactNode,
  useContext,
  forwardRef,
} from 'react'

import { tv, type VariantProps } from 'tailwind-variants'

const input = tv({
  slots: {
    root: 'border border-slate-700 bg-slate-900',
    control:
      'placeholder-slate-500 border-none text-slate-200 bg-transparent outline-none',
  },
  variants: {
    variant: {
      default: {
        root: 'group box-border flex items-center justify-center gap-2 rounded-md border border-solid px-4 px-3 transition-opacity  h-12 w-full focus-within:border-lime-400',
        control:
          'h-full w-full border-none text-slate-100 text-base font-normal transition-colors placeholder:text-slate-400',
      },
      password: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const inputContext = createContext({} as VariantProps<typeof input>)

export function Input({
  children,
  variant,
}: { children: ReactNode } & VariantProps<typeof input>) {
  const { root } = input({ variant })

  return (
    <inputContext.Provider value={{ variant }}>
      <div className={root()}>{children}</div>
    </inputContext.Provider>
  )
}

export interface ControlProps extends ComponentProps<'input'> {}

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  ({ className, ...props }, ref) => {
    const { variant } = useContext(inputContext)
    const { control } = input({ variant })

    return <input className={control({ className })} {...props} ref={ref} />
  },
)

Control.displayName = 'Control'
