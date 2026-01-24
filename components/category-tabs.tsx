'use client'

import { useState } from 'react'

interface CategoryTabsProps {
  categories: string[]
  onSelect?: (category: string) => void
}

export function CategoryTabs({ categories, onSelect }: CategoryTabsProps) {
  const [active, setActive] = useState(categories[0])

  const handleSelect = (category: string) => {
    setActive(category)
    onSelect?.(category)
  }

  return (
    <div className="flex gap-4 border-b border-border">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleSelect(category)}
          className={`px-1 py-3 text-xs font-bold tracking-wide transition-all ${
            active === category
              ? 'border-b-2 border-foreground text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
