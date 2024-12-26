import { motion } from 'framer-motion'

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
        'disabled:cursor-not-allowed disabled:opacity-50'
      )}
      disabled={disabled}
      whileHover={{ x: disabled ? 0 : 4 }}
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      Read more →
    </motion.button>
  )
}
