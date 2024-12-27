import { useEffect, useRef } from 'react'

interface UseDragToCloseProps {
  onClose: () => void
}

export function useDragToClose({ onClose }: UseDragToCloseProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    const sheet = sheetRef.current
    if (!sheet) return

    function handleTouchStart(e: TouchEvent) {
      startX.current = e.touches[0].clientX
      isDragging.current = true
    }

    function handleTouchMove(e: TouchEvent) {
      if (!isDragging.current) return

      const deltaX = e.touches[0].clientX - startX.current
      // Prevent scrolling while swiping right
      if (deltaX > 0) {
        e.preventDefault()
      }
    }

    function handleTouchEnd(e: TouchEvent) {
      if (!isDragging.current) return

      const deltaX = e.changedTouches[0].clientX - startX.current
      if (deltaX > window.innerWidth * 0.3) {
        onClose()
      }

      isDragging.current = false
    }

    sheet.addEventListener('touchstart', handleTouchStart)
    sheet.addEventListener('touchmove', handleTouchMove, { passive: false })
    sheet.addEventListener('touchend', handleTouchEnd)

    return () => {
      sheet.removeEventListener('touchstart', handleTouchStart)
      sheet.removeEventListener('touchmove', handleTouchMove)
      sheet.removeEventListener('touchend', handleTouchEnd)
    }
  }, [onClose])

  return sheetRef
}
