import { SheetTitle } from '@/components/ui/sheet'

import type { ArticleDetails } from '../types'
import { ArticleMetadata } from './ArticleMetadata'

interface ArticleHeaderProps {
  articleDetails: ArticleDetails
}

export function ArticleHeader({ articleDetails }: ArticleHeaderProps) {
  return (
    <header>
      <SheetTitle className="text-2xl font-bold leading-tight">{articleDetails.title}</SheetTitle>
      <ArticleMetadata article={articleDetails} />
    </header>
  )
}
