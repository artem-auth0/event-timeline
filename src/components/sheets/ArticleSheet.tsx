'use client'

import { Sheet, SheetContent } from '@/components/ui/sheet'

import { useArticleDetails } from './hooks/useArticleDetails'
import { useDragToClose } from './hooks/useDragToClose'
import { SheetBody } from './SheetBody'
import { SheetHeader } from './SheetHeader'
import type { SheetDemoProps } from './types'

export function ArticleSheet({ currentArticle, isSheetOpen, setIsSheetOpen }: SheetDemoProps) {
  const { articleDetails, isLoading } = useArticleDetails(currentArticle, isSheetOpen)
  const sheetRef = useDragToClose({
    onClose: () => setIsSheetOpen(false),
  })

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent
        ref={sheetRef}
        className="w-[95vw] overflow-y-auto bg-gradient-to-b from-background to-background/95 p-0 sm:max-w-[600px]"
      >
        <SheetHeader articleDetails={articleDetails} isLoading={isLoading} />
        <SheetBody articleDetails={articleDetails} isLoading={isLoading} />
      </SheetContent>
    </Sheet>
  )
}
