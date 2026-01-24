import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface FeaturedArticleProps {
  image: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  commentCount?: number
}

export function FeaturedArticle({
  image,
  category,
  title,
  excerpt,
  author,
  date,
  commentCount = 0,
}: FeaturedArticleProps) {
  return (
    <div className="overflow-hidden bg-white shadow-sm">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={700}
          height={400}
          className="h-72 w-full object-cover"
        />
        {/* Category Badge Overlay */}
        <div className="absolute bottom-4 left-4 bg-gray-200 px-3 py-1 text-xs font-bold text-gray-900">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h2 className="mb-3 text-xl font-bold leading-tight text-gray-900">{title}</h2>

        {/* Metadata */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span>by <span className="font-semibold text-gray-700">{author}</span></span>
          <span>and 1 others</span>
          <span>📅 {formatDate(date)}</span>
          <span>💬 {commentCount}</span>
        </div>

        {/* Excerpt */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600">{excerpt}</p>

        {/* Read More */}
        <button className="border border-gray-900 px-6 py-2 text-xs font-bold tracking-wider text-gray-900 transition-all hover:bg-gray-900 hover:text-white">
          READ MORE
        </button>
      </div>
    </div>
  )
}
