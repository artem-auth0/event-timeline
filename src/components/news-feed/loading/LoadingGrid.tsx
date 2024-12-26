import { motion } from 'framer-motion'

import { NewsCardSkeleton } from './NewsCardSkeleton'

export function LoadingGrid() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {[1, 2, 3, 4].map(i => (
          <motion.div
            key={i}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: [0.25, 0.25, 0, 1],
            }}
          >
            <NewsCardSkeleton />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
