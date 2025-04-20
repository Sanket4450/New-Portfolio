import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  size?: 'sm' | 'md' | 'lg'
}

function Switch({ className, size = 'md', ...props }: SwitchProps) {
  const sizes = {
    sm: {
      rootWidth: 'w-8',
      thumbSize: 'size-4',
      thumbOffset: 'translate-x-[calc(100%-2px)]',
    },
    md: {
      rootWidth: 'w-10',
      thumbSize: 'size-5',
      thumbOffset: 'translate-x-[calc(100%-2px)]',
    },
    lg: {
      rootWidth: 'w-12',
      thumbSize: 'size-6',
      thumbOffset: 'translate-x-[calc(100%-3px)]',
    },
  }

  const selectedSize = sizes[size]

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        `peer data-[state=checked]:bg-primary hover:cursor-pointer data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50`,
        selectedSize.rootWidth,
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          `bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block rounded-full ring-0 transition-transform`,
          selectedSize.thumbSize,
          selectedSize.thumbOffset,
          'data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
