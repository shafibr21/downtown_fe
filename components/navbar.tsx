'use client'

import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: 'HOME', href: '#' },
    { name: 'NEWS', href: '#' },
    { name: 'POLITICS', href: '#' },
    { name: 'BUSINESS', href: '#' },
    { name: 'NATIONAL', href: '#' },
    { name: 'CULTURE', href: '#' },
    { name: 'OPINION', href: '#' },
    { name: 'LIFESTYLE', href: '#' },
    { name: 'SPORTS', href: '#' },
  ]

  return (
    <nav className="border-b border-border bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-full px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-black tracking-tight">THE DOWNTOWN</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden flex-1 lg:flex lg:items-center lg:justify-center lg:gap-6">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className={`text-xs font-bold tracking-wider transition-colors ${
                  cat.name === 'HOME'
                    ? 'border-b-2 border-primary pb-1'
                    : 'hover:text-primary'
                }`}
              >
                {cat.name}
              </a>
            ))}
          </div>

          {/* Search Icon */}
          <button className="hidden lg:block" aria-label="Search">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex flex-col gap-4 border-t border-border py-4 lg:hidden">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                className="text-xs font-bold tracking-wider hover:text-primary"
              >
                {cat.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
