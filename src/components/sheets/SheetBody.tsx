import Image from 'next/image'

import { ArticleLink } from '@/components/sheets/article/ArticleLink'
import { ArticleSentiment } from '@/components/sheets/article/ArticleSentiment'
import { ArticleSummary } from '@/components/sheets/article/ArticleSummary'

import { ArticleHeader } from './article/ArticleHeader'
import { SheetSkeleton } from './loading/SheetSkeleton'
import type { ArticleDetails } from './types'

interface SheetBodyProps {
  isLoading: boolean
  articleDetails: ArticleDetails | null
}

export function SheetBody({ isLoading, articleDetails }: SheetBodyProps) {
  if (isLoading) {
    return <SheetSkeleton />
  }

  if (!articleDetails) {
    return null
  }

  return (
    <div>
      <ArticleImage imageUrl={articleDetails.imageUrl} />
      <ArticleContent articleDetails={articleDetails} />
    </div>
  )
}

function ArticleImage({ imageUrl }: { imageUrl: string }) {
  if (!imageUrl) return null

  return (
    <div className="relative h-48 w-full">
      <Image alt="" className="h-full w-full object-cover" src={imageUrl} />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}

function ArticleContent({ articleDetails }: { articleDetails: ArticleDetails }) {
  return (
    <div className="space-y-6 p-6">
      <ArticleHeader articleDetails={articleDetails} />
      <ArticleSummary summary={articleDetails.summary} />
      <ArticleSentiment sentiment={articleDetails.sentiment} />
      <ArticleLink domain={articleDetails.source.domain} url={articleDetails.url} />
    </div>
  )
}
