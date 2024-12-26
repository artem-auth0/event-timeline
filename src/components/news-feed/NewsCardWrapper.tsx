import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { NewsCard } from '../news/NewsCard'
import type { NewsCardWrapperProps } from './types'

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    rotateX: 45,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 100,
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1],
    },
  },
}

export function NewsCardWrapper({ article, index, onReadMore }: NewsCardWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
    amount: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      className="perspective-1000 relative origin-top will-change-transform"
      initial="hidden"
      variants={cardAnimation}
    >
      <NewsCard article={article} isNewest={index === 0} onReadMore={onReadMore} />
    </motion.div>
  )
}
