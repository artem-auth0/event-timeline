'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

import { getEventConfig } from '@/lib/events'
import { cn } from '@/lib/utils'
import { CardContent } from '@/components/news/card'

import { NewestCardEffects } from './effects/NewestCardEffects'
import type { NewsCardProps } from './types'

export function NewsCard({ article, isNewest = false, onReadMore }: NewsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const eventConfig = getEventConfig(article.eventType)

  return (
    <motion.article
      ref={cardRef}
      className={cn(
        'group relative flex h-full rounded-xl border',
        'bg-card transition-shadow duration-300 hover:shadow-lg'
      )}
      whileHover={{ y: -3, scale: 1.03 }}
    >
      <CardContent article={article} config={eventConfig} onReadMore={onReadMore} />
      {isNewest && <NewestCardEffects isNewest={isNewest} />}
    </motion.article>
  )
}
