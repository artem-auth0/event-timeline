interface Company {
  id: string
  name: string
}

type RequestInit = Parameters<typeof fetch>[1]

interface EventMetadata {
  announcement_date?: string
  effective_date?: string | null
  company?: Company
  headcount?: number
  reported_percentage?: number | null
  locations?: string[]
  reason?: string
  name?: string
}

interface Signal {
  createdAt: string
  updatedAt: string
  articleId: string
  signalId: string
  eventId: string
  eventType: string
  metadata: EventMetadata
  companies: Company[]
}

export interface Event {
  eventId: string
  eventType: string
  createdAt: string
  updatedAt: string
  metadata: EventMetadata
  companies: Company[]
  signals?: Signal[]
}

export interface ApiListResponse<T> {
  status: number
  numResults: number
  results: T[]
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(`HTTP ${status}: ${message}`)
    this.name = 'ApiError'
  }
}

async function fetchFromApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiListResponse<T>> {
  const response = await fetch(`/api${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new ApiError(response.status, `API Error: ${response.statusText}`)
  }

  return response.json()
}

export const eventsApi = {
  getEvents: async (params?: {
    limit?: number
    page?: number
    type?: string
    from?: string
    to?: string
    eventTypes?: string | null
  }) => {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.append('page', params.page.toString())
    if (params?.type) searchParams.append('type', params.type)
    if (params?.from) searchParams.append('from', params.from)
    if (params?.to) searchParams.append('to', params.to)
    if (params?.eventTypes) {
      searchParams.append('eventType', params.eventTypes)
    }

    searchParams.append('size', params?.limit?.toString() || '10')
    searchParams.append('expandSignals', 'true')

    return fetchFromApi<Event>(`/events?${searchParams.toString()}`)
  },
}
