import { CardContentProps } from '../types'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { CardSummary } from './CardSummary'

export function CardContent({ article, config, onReadMore }: CardContentProps) {
  return (
    <div className="relative z-10 flex w-full flex-col rounded-xl bg-background p-6">
      <CardHeader article={article} config={config} />
      <CardSummary article={article} config={config} />
      <CardFooter article={article} onReadMore={onReadMore} />
    </div>
  )
}
