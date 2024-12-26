import { CardContentProps } from '../types'

export function CardHeader({ article, config }: Pick<CardContentProps, 'article' | 'config'>) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <div className="flex-1">
        <h3 className="text-lg font-semibold leading-snug transition-colors duration-200 group-hover:text-primary">
          {config.formatTitle(article)}
        </h3>
      </div>
    </div>
  )
}
