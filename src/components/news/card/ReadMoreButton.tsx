import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

import { cn } from '@/lib/utils'

interface ReadMoreButtonProps {
  disabled: boolean
  onClick: () => void
}

export function ReadMoreButton({ disabled, onClick }: ReadMoreButtonProps) {
  return (
    <motion.button
      className={cn(
        'text-sm font-medium text-primary hover:text-primary/80',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'flex items-center gap-2'
      )}
      disabled={disabled}
      whileHover={{ x: disabled ? 0 : 4 }}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {disabled ? (
        <>
          <Loader2 className="h-3 w-3 animate-spin" />
          Loading...
        </>
      ) : (
        'Read more →'
      )}
    </motion.button>
  )
}
