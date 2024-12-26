import Image from 'next/image'
import { ImageOff } from 'lucide-react'

interface ArticleImageProps {
  imageUrl: string | undefined
}

export function ArticleImage({ imageUrl }: ArticleImageProps) {
  if (!imageUrl) {
    return (
      <figure className="relative flex h-48 w-full items-center justify-center bg-muted">
        <ImageOff className="h-8 w-8 text-muted-foreground" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
        />
      </figure>
    )
  }

  return (
    <figure className="relative h-48 w-full">
      <Image
        alt=""
        className="h-full w-full object-cover"
        height={192}
        loading="lazy"
        src={imageUrl}
        width={800}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
      />
    </figure>
  )
}
