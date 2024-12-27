import { motion } from 'framer-motion'

import { useCardEffects } from './useCardEffects'

interface NewestCardEffectsProps {
  isNewest: boolean
}

export function NewestCardEffects({ isNewest }: NewestCardEffectsProps) {
  const {
    pulseEffect: { pulseBg },
    rotatingGradient: { rotateBg },
  } = useCardEffects(isNewest)

  return (
    <>
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: rotateBg,
          // Safari fix for the gradient
          transform: 'translateZ(0)',
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-90"
        style={{
          background: rotateBg,
          filter: pulseBg,
          // Safari fix for the gradient
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
