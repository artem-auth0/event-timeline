'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { ArticleSheet } from '@/components/sheets/ArticleSheet'
import { Event } from '@/services/api'

import { useInfiniteScroll } from './hooks/useInfiniteScroll'
import { LoadingGrid } from './loading/LoadingGrid'
import { LoadMoreTrigger } from './LoadMoreTrigger'
import { NewsCardWrapper } from './NewsCardWrapper'
import type { NewsFeedProps } from './types'

const gridAnimation = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.25, 0, 1],
    },
  },
}

export function NewsFeed({
  articles,
  isLoading,
  hasMore,
  isLoadingMore,
  onLoadMore,
}: NewsFeedProps) {
  const [currentArticle, setCurrentArticle] = useState<Event | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const loadMoreRef = useInfiniteScroll({ hasMore, isLoadingMore, onLoadMore })

  if (isLoading) {
    return <LoadingGrid />
  }

  return (
    <div className="my-8">
      <motion.div
        animate="show"
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8"
        initial="hidden"
        variants={gridAnimation}
      >
        {articles.map((article, index) => (
          <NewsCardWrapper
            key={article.eventId}
            article={article}
            index={index}
            onReadMore={article => {
              setCurrentArticle(article)
              setIsSheetOpen(true)
            }}
          />
        ))}
      </motion.div>

      <LoadMoreTrigger ref={loadMoreRef} isLoadingMore={isLoadingMore} />

      <ArticleSheet
        currentArticle={currentArticle}
        isSheetOpen={isSheetOpen}
        setIsSheetOpen={setIsSheetOpen}
      />
    </div>
  )
}
