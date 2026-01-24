'use client'

import { useState } from 'react'
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
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!items.length) return null

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-white p-5">
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 z-10 flex border border-gray-400 w-7 -translate-y-1/2 items-center justify-center bg-white shadow-sm hover:bg-gray-50 lg:h-25 md:h-20 h-15"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" strokeWidth={2} />
      </button>

      {/* Mobile: Single item, Desktop: Grid of 3 */}
      <div className="mx-8 bg-white">
        {/* Mobile View - Single Item */}
        <div className="block md:hidden">
          <div className="flex gap-3 bg-white">
            <div className="p-1 h-16 w-16 shrink-0 overflow-hidden">
              <Image
                src={items[currentIndex].image || "/placeholder.svg"}
                alt={items[currentIndex].title}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 items-center h-20">
              <h3 className="text-xs font-semibold leading-tight text-gray-900">
                {items[currentIndex].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Desktop View - Grid of all items */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 bg-white h-20">
              <div className="p-1 h-16 w-16 shrink-0 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 items-center h-20">
                <h3 className="text-xs font-semibold leading-tight text-gray-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 z-10 flex border border-gray-400 w-7 -translate-y-1/2 items-center justify-center bg-white shadow-sm hover:bg-gray-50 lg:h-25 md:h-20 h-15"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" strokeWidth={2} />
      </button>
    </div>
    </div>
  )
}
