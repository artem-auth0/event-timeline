import { format } from 'date-fns'

import { useEvents } from '@/hooks/useEvents'
import { NewsFeed } from '@/components/news-feed/NewsFeed'

interface EventsContainerProps {
  selectedEventType: string | null
  children?: (itemsLeft: number | undefined) => React.ReactNode
}

export function EventsContainer({ selectedEventType, children }: EventsContainerProps) {
  const { events, isLoading, error, loadMore, hasMore, isLoadingMore, itemsLeft } = useEvents({
    limit: 30,
    pollingInterval: 60000,
    from: format(new Date(), 'yyyy-MM-dd'),
    eventTypes: selectedEventType,
  })

  if (error) {
    return (
      <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
        Error loading events: {error.message}
      </div>
    )
  }

  return (
    <>
      {children?.(itemsLeft)}
      <NewsFeed
        articles={events}
        hasMore={hasMore}
        isLoading={isLoading}
        isLoadingMore={isLoadingMore}
        onLoadMore={loadMore}
      />
    </>
  )
}
