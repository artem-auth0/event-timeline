import { Event } from '@/services/api'

export interface NewsFeedProps {
  articles: Event[]
  isLoading?: boolean
  hasMore?: boolean
  isLoadingMore?: boolean
  onLoadMore?: () => void
}

export interface NewsCardWrapperProps {
  article: Event
  index: number
  onReadMore: (article: Event) => void
}
