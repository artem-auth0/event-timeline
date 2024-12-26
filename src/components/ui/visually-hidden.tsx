import { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export function VisuallyHidden({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0',
        className
      )}
      {...props}
    />
  )
}
