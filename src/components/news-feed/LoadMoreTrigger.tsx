import { forwardRef } from 'react'
import { motion } from 'framer-motion'

interface LoadMoreTriggerProps {
  isLoadingMore?: boolean
}

export const LoadMoreTrigger = forwardRef<HTMLDivElement, LoadMoreTriggerProps>(
  function LoadMoreTrigger({ isLoadingMore }, ref) {
    return (
      <div ref={ref} className="h-16">
        {isLoadingMore && (
          <div className="flex items-center justify-center py-16">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              className="h-8 w-8 rounded-full border-b-2 border-primary/20"
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
          </div>
        )}
      </div>
    )
  }
)
