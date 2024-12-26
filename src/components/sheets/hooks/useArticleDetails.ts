import { useEffect, useState } from 'react'

import { Event } from '@/services/api'

import type { ArticleDetails } from '../types'

export function useArticleDetails(currentArticle: Event | null, isSheetOpen: boolean) {
  const [articleDetails, setArticleDetails] = useState<ArticleDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchArticleDetails() {
      if (!currentArticle?.signals?.[0]?.articleId) return

      setIsLoading(true)
      try {
        const response = await fetch(`/api/news/${currentArticle.signals[0].articleId}`)
        const data = await response.json()
        setArticleDetails(data.articles[0])
      } catch (error) {
        console.error('Failed to fetch article details:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isSheetOpen && currentArticle) {
      fetchArticleDetails()
    }
  }, [currentArticle, isSheetOpen])

  return { articleDetails, isLoading }
}
