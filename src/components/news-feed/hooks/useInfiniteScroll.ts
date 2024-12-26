import { useEffect, useRef } from 'react'

interface UseInfiniteScrollProps {
  hasMore?: boolean
  isLoadingMore?: boolean
  onLoadMore?: () => void
}

export function useInfiniteScroll({ hasMore, isLoadingMore, onLoadMore }: UseInfiniteScrollProps) {
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loadMoreRef.current || !hasMore || isLoadingMore) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && onLoadMore) {
          onLoadMore()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [hasMore, isLoadingMore, onLoadMore])

  return loadMoreRef
}
