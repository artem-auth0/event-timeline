'use client'

import { motion, PanInfo, useMotionValue } from 'framer-motion'

import { Sheet, SheetContent } from '@/components/ui/sheet'

import { useArticleDetails } from './hooks/useArticleDetails'
import { SheetBody } from './SheetBody'
import { SheetHeader } from './SheetHeader'
import type { SheetDemoProps } from './types'

const DRAG_THRESHOLD = 100

export function ArticleSheet({ currentArticle, isSheetOpen, setIsSheetOpen }: SheetDemoProps) {
  const { articleDetails, isLoading } = useArticleDetails(currentArticle, isSheetOpen)
  const x = useMotionValue(0)

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, dragInfo: PanInfo) => {
    if (dragInfo.offset.x > DRAG_THRESHOLD) {
      setIsSheetOpen(false)
    }
  }

  const motionConfig = {
    drag: 'y' as const,
    dragConstraints: { top: 0, bottom: 0 },
    dragElastic: 0.2,
    dragMomentum: false,
    style: { x },
    onDragEnd: handleDragEnd,
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent className="w-[95vw] overflow-y-auto bg-gradient-to-b from-background to-background/95 p-0 sm:max-w-[600px]">
        <motion.div {...motionConfig}>
          <SheetHeader articleDetails={articleDetails} isLoading={isLoading} />
          <SheetBody articleDetails={articleDetails} isLoading={isLoading} />
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
