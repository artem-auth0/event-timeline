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
      <motion.div className="absolute -inset-[1px] rounded-xl" style={{ background: rotateBg }} />
      <motion.div
        className="absolute -inset-[1px] rounded-xl opacity-90"
        style={{ background: rotateBg, filter: pulseBg }}
      />
    </>
  )
}
