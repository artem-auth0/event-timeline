import { TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ArticleDetails } from '../types'

interface ArticleSentimentProps {
  sentiment: ArticleDetails['sentiment']
}

export function ArticleSentiment({ sentiment }: ArticleSentimentProps) {
  return (
    <div className="flex items-center gap-3">
      <TrendingUp className={cn('h-5 w-5', getSentimentColor(sentiment))} />
      <SentimentBar value={sentiment.positive} />
    </div>
  )
}

function SentimentBar({ value }: { value: number }) {
  return (
    <div className="h-2 flex-1 rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-primary transition-all"
        style={{
          width: `${Math.max(value * 100, 5)}%`,
        }}
      />
    </div>
  )
}

function getSentimentColor(sentiment: ArticleDetails['sentiment']): string {
  if (sentiment.positive > 0.5) return 'text-emerald-500'
  if (sentiment.negative > 0.5) return 'text-rose-500'
  return 'text-blue-500'
} 