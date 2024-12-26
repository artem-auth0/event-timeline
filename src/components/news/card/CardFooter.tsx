import { CardContentProps } from '../types'
import { ReadMoreButton } from './ReadMoreButton'
import { TimeStamp } from './TimeStamp'

export function CardFooter({
  article,
  onReadMore,
}: Pick<CardContentProps, 'article' | 'onReadMore'>) {
  return (
    <div className="flex items-center justify-between">
      <TimeStamp date={article.createdAt} />
      <ReadMoreButton disabled={!article.signals?.length} onClick={() => onReadMore(article)} />
    </div>
  )
}
