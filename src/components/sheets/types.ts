import { Event } from '@/services/api'

export interface SheetDemoProps {
  currentArticle: Event | null
  isSheetOpen: boolean
  setIsSheetOpen: (isOpen: boolean) => void
}

export interface ArticleDetails {
  title: string
  content: string
  summary: string
  imageUrl: string
  pubDate: string
  categories: {
    name: string
  }[]
  url: string
  source: {
    domain: string
    location: {
      city: string
      state: string
    }
  }
  sentiment: {
    positive: number
    negative: number
    neutral: number
  }
  companies: Array<{
    name: string
    symbols: string[]
  }>
}
