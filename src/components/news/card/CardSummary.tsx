import { CardContentProps } from '../types'

export function CardSummary({ config, article }: Pick<CardContentProps, 'config' | 'article'>) {
  return (
    <p className="mb-4 line-clamp-2 flex-grow text-sm text-muted-foreground">
      {config.formatSummary(article)}
    </p>
  )
}
