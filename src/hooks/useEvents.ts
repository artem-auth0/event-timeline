import { useEffect, useState } from 'react'

import { Event, eventsApi } from '@/services/api'

interface UseEventsOptions {
  pollingInterval?: number
  limit?: number
  type?: string
  from?: string
  to?: string
  eventTypes?: string | null
}

export function useEvents({
  pollingInterval = 60000,
  limit = 10,
  type,
  from,
  to,
  eventTypes,
}: UseEventsOptions = {}) {
  const [events, setEvents] = useState<Event[]>([])
  const [totalEvents, setTotalEvents] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [page, setPage] = useState(0)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Reset state when filters change
  useEffect(() => {
    const fetchInitialEvents = async () => {
      // setIsLoading(true)
      // setEvents([])
      setPage(0)

      try {
        const response = await eventsApi.getEvents({
          limit,
          type,
          page: 0,
          from,
          to,
          eventTypes,
        })
        setEvents(response.results)
        setTotalEvents(response.numResults)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch events'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchInitialEvents()
  }, [limit, type, from, to, eventTypes])

  // Calculate if we have more pages to load
  const hasMore = events.length < totalEvents

  // Polling for new events
  useEffect(() => {
    if (!pollingInterval) return

    let timeoutId: NodeJS.Timeout

    async function pollEvents() {
      try {
        const response = await eventsApi.getEvents({
          limit,
          type,
          page: 0,
          from,
          to,
          eventTypes,
        })

        setEvents(prev => {
          const mostRecentExistingDate = prev[0]?.createdAt
            ? new Date(prev[0].createdAt).getTime()
            : 0

          const newEvents = response.results.filter(newEvent => {
            const newEventDate = new Date(newEvent.createdAt).getTime()
            return newEventDate > mostRecentExistingDate
          })

          if (newEvents.length > 0) {
            return [...newEvents, ...prev]
          }
          return prev
        })
        setTotalEvents(response.numResults)
      } catch (err) {
        console.error('Polling error:', err)
      }
      timeoutId = setTimeout(pollEvents, pollingInterval)
    }

    timeoutId = setTimeout(pollEvents, pollingInterval)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [pollingInterval, limit, type, from, to, eventTypes])

  // Function to load more events
  const loadMore = async () => {
    if (isLoadingMore || !hasMore) return

    try {
      setIsLoadingMore(true)
      const nextPage = page + 1
      const response = await eventsApi.getEvents({
        limit,
        type,
        page: nextPage,
        from,
        to,
        eventTypes,
      })

      setEvents(prev => [...prev, ...response.results])
      setPage(nextPage)
      setTotalEvents(response.numResults)
    } catch (err) {
      console.error('Error loading more events:', err)
    } finally {
      setIsLoadingMore(false)
    }
  }

  return {
    events,
    totalEvents,
    isLoading,
    error,
    loadMore,
    hasMore,
    isLoadingMore,
    itemsLeft: Math.max(0, totalEvents - events.length),
  }
}
