'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: string
  title: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: CarouselProps) {
  if (!items.length) return null

  return (
    <div className="bg-white p-5">
    <div className="relative">
      {/* Left Arrow */}
      <button
        className="absolute left-0 top-1/2 z-10 flex border border-gray-400 w-7 -translate-y-1/2 items-center justify-center bg-white shadow-sm hover:bg-gray-50 h-25"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" strokeWidth={2} />
      </button>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mx-8 bg-white">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 bg-white">
            <div className="p-1 h-16 w-16 shrink-0 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 items-center">
              <h3 className="text-xs font-semibold leading-tight text-gray-900">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-0 top-1/2 z-10 flex border border-gray-400 w-7 -translate-y-1/2 items-center justify-center bg-white shadow-sm hover:bg-gray-50 h-25"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" strokeWidth={2} />
      </button>
    </div>
    </div>
  )
}
