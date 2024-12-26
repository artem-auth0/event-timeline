interface ArticleSummaryProps {
  summary: string
}

export function ArticleSummary({ summary }: ArticleSummaryProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <p className="text-lg font-medium leading-relaxed">
        {summary}
      </p>
    </div>
  )
} 