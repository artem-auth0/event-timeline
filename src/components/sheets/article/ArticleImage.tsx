import Image from 'next/image'

interface ArticleImageProps {
  imageUrl: string | undefined
}

export function ArticleImage({ imageUrl }: ArticleImageProps) {
  if (!imageUrl) return null

  return (
    <figure className="relative h-48 w-full">
      <Image alt="" className="h-full w-full object-cover" loading="lazy" src={imageUrl} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
      />
    </figure>
  )
}
