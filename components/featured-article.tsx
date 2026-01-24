import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { AlarmClock } from 'lucide-react'

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
    <div className="relative bg-white">
      {/* Image */}
      <div className="overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={700}
          height={500}
          className="h-80 w-full object-cover"
        />
      </div>
        
      {/* Content - Overlapping */}
      <div className="relative -mt-15 mx-6 bg-white p-6 ">
        {/* Category Badge */}
        <div className="mb-4 inline-block px-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          {category}
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold leading-tight text-gray-900">{title}</h2>

        {/* Metadata */}
        <div className="mb-4 flex flex-wrap items-center gap-1 text-xs text-gray-500">
          <span className="mr-1">by</span>
          <span className="font-semibold text-gray-700">{author}</span>
          <span className="mx-1">and 1 others</span>
          <AlarmClock className='w-3 h-3'/>
          <span>{formatDate(date)}</span>
          <span className="mx-1">💬</span>
          <span>{commentCount}</span>
        </div>

        {/* Excerpt */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600">{excerpt}</p>

        {/* Read More */}
        <button className="border border-gray-300 px-6 py-2 text-xs font-bold shadow-2xl tracking-wider text-gray-400 transition-all hover:bg-gray-500 hover:text-white">
          READ MORE
        </button>
      </div>
    </div>
  )
}
