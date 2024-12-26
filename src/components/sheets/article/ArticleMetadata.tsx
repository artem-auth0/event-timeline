import { format } from 'date-fns'
import { Building2, Calendar, MapPin } from 'lucide-react'

import { CategoryTag } from '@/components/sheets/article/CategoryTag'
import { MetadataItem } from '@/components/sheets/article/MetadataItem'

import type { ArticleDetails } from '../types'

interface ArticleMetadataProps {
  article: ArticleDetails
}

export function ArticleMetadata({ article }: ArticleMetadataProps) {
  const { pubDate, source, companies, categories } = article

  return (
    <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
      <MetadataItem icon={<Calendar className="h-4 w-4" />}>
        <time dateTime={pubDate}>{format(new Date(pubDate), 'MMM d, yyyy')}</time>
      </MetadataItem>

      {source.location && (
        <MetadataItem icon={<MapPin className="h-4 w-4" />}>
          <span>
            {source.location.city}, {source.location.state}
          </span>
        </MetadataItem>
      )}

      {companies[0] && (
        <MetadataItem icon={<Building2 className="h-4 w-4" />}>
          <span>{companies[0].name}</span>
        </MetadataItem>
      )}

      {categories.map(category => (
        <CategoryTag key={category.name} name={category.name} />
      ))}
    </div>
  )
}
