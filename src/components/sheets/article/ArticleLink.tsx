interface ArticleLinkProps {
  url: string
  domain: string
}

export function ArticleLink({ url, domain }: ArticleLinkProps) {
  return (
    <a
      className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      Read full article on {domain} →<span className="sr-only">(opens in new tab)</span>
    </a>
  )
}
