import { MotionValue } from 'framer-motion'

import { getEventConfig } from '@/lib/events'
import { Event } from '@/services/api'

export interface NewsCardProps {
  article: Event
  isNewest?: boolean
  onReadMore: (article: Event) => void
}

export interface CardContentProps {
  article: Event
  config: ReturnType<typeof getEventConfig>
  onReadMore: (article: Event) => void
}

export interface NewestCardEffectsProps {
  pulseBg: MotionValue<string>
  rotateBg: MotionValue<string>
}
