import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SheetClose, SheetDescription, SheetTitle } from '@/components/ui/sheet'
import { VisuallyHidden } from '@/components/ui/visually-hidden'

import type { ArticleDetails } from './types'

interface SheetHeaderProps {
  isLoading: boolean
  articleDetails: ArticleDetails | null
}

export function SheetHeader({ isLoading, articleDetails }: SheetHeaderProps) {
  return (
    <>
      <div className="fixed right-4 top-4 z-10">
        <SheetClose asChild>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <X className="h-4 w-4" />
            <VisuallyHidden>Close</VisuallyHidden>
          </Button>
        </SheetClose>
      </div>

      {isLoading ? (
        <VisuallyHidden>
          <SheetTitle>Loading article details...</SheetTitle>
          <SheetDescription>Please wait while we load the article details.</SheetDescription>
        </VisuallyHidden>
      ) : (
        <VisuallyHidden>
          <SheetTitle>{articleDetails?.title || 'Article details'}</SheetTitle>
          <SheetDescription>
            {articleDetails?.summary || 'Detailed view of the selected article'}
          </SheetDescription>
        </VisuallyHidden>
      )}
    </>
  )
}
