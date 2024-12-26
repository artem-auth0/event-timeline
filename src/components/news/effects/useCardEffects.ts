import { useEffect } from 'react'
import { useSpring, useTime, useTransform } from 'framer-motion'

const PULSE_CONFIG = {
  stiffness: 3,
  damping: 0,
  mass: 1,
}

const ROTATION_PERIOD = 5000
const GRADIENT_COLORS = ['#ff4545', '#00ff99', '#006aff', '#ff0095', '#ff4545']

export function useCardEffects(isNewest: boolean) {
  const time = useTime()
  const pulse = useSpring(0, PULSE_CONFIG)
  const rotate = useTransform(time, t => ((t % ROTATION_PERIOD) / ROTATION_PERIOD) * 360)

  useEffect(() => {
    if (isNewest) {
      pulse.set(3)
    }
  }, [isNewest, pulse])

  return {
    pulseEffect: {
      pulseBg: useTransform(pulse, value => `blur(${value}px)`),
    },
    rotatingGradient: {
      rotateBg: useTransform(
        rotate,
        value => `conic-gradient(from ${value}deg, ${GRADIENT_COLORS.join(', ')})`
      ),
    },
  }
}
