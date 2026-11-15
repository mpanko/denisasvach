'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import type { BioSection } from '../types'

export default function CollapsibleSection({ title, items }: BioSection) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="flex justify-between items-center w-full text-left font-bold text-2xl uppercase py-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="grow">{title}</span>
        <span className="flex items-center justify-center w-8 h-8">
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </span>
      </button>
      {/* Animates open/closed by transitioning the grid row between 0fr and 1fr. */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-4 pb-6">
            {items.map((item, index) => (
              <li key={index} className="border-l-4 border-black pl-4">
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-sm">
                  {[item.year, item.institution, item.type, item.description, item.location]
                    .filter(Boolean)
                    .join(' | ')}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
