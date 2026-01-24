import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface ArticleCardProps {
  image?: string
  category?: string
  title: string
  excerpt?: string
  author?: string
  date: string
  commentCount?: number
  variant?: 'vertical' | 'horizontal'
}

export function ArticleCard({
  image,
  category,
  title,
  excerpt,
  author = 'JOHN DOE',
  date,
  commentCount = 0,
  variant = 'vertical',
}: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <div className="flex gap-3 border-b border-border pb-4 last:border-b-0">
        {image && (
          <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-secondary">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={80}
              height={80}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-sm font-bold leading-snug text-foreground">{title}</h3>
          <div className="mt-1 flex gap-2 text-xs text-muted-foreground">
            <span className="font-semibold">by {author}</span>
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {image && (
        <div className="relative mb-3 overflow-hidden bg-secondary">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={250}
            className="h-40 w-full object-cover"
          />
          {category && (
            <div className="absolute right-2 top-2 bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
              {category}
            </div>
          )}
        </div>
      )}
      <div>
        {category && !image && (
          <div className="mb-2 inline-block bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
            {category}
          </div>
        )}
        <h3 className="mb-2 text-base font-bold leading-tight text-foreground">{title}</h3>
        {excerpt && <p className="mb-2 text-xs leading-relaxed text-muted-foreground">{excerpt}</p>}
        <div className="flex gap-2 text-xs text-muted-foreground">
          <span className="font-semibold">by {author}</span>
          <span>{formatDate(date)}</span>
          {commentCount > 0 && <span>💬 {commentCount}</span>}
        </div>
      </div>
    </div>
  )
}
