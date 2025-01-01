import { NextResponse } from 'next/server'

import { ApiError } from '@/services/api'

// Types
export interface ApiConfig {
  readonly baseUrl: string
  readonly apiKey: string
}

// Configuration
export const API_CONFIG: ApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_PERIGON_API_URL ?? '',
  apiKey: process.env.PERIGON_API_KEY ?? '',
} as const

// Validators
export function validateConfig(config: ApiConfig): void {
  if (!config.baseUrl || !config.apiKey) {
    throw new ApiError(500, 'Missing API configuration')
  }
}

// Response handlers
export function createErrorResponse(error: string, status: number): NextResponse {
  return NextResponse.json({ error }, { status })
}

export function createSuccessResponse<T>(data: T): NextResponse {
  return NextResponse.json(data)
}

// API helpers
export function createApiUrl(endpoint: string, searchParams?: URLSearchParams): URL {
  const url = new URL(`${API_CONFIG.baseUrl}${endpoint}`)

  if (searchParams) {
    searchParams.forEach((value, key) => url.searchParams.append(key, value))
  }

  return url
}

export async function fetchFromApiEndpoint<T>(url: URL): Promise<T> {
  const response = await fetch(url.toString(), {
    headers: {
      'x-api-key': API_CONFIG.apiKey,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new ApiError(response.status, `API Error: ${response.statusText}`)
  }

  return response.json()
}
