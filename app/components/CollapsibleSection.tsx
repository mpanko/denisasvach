'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

type Item = {
  year: number | string
  title: string
  institution?: string
  type?: string
  description?: string
  location?: string
}

type CollapsibleSectionProps = {
  title: string
  items: Item[]
}

export default function CollapsibleSection({ title, items }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-2xl py-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        {isOpen ? (
          <Minus className="w-5 h-5" />
        ) : (
          <Plus className="w-5 h-5" />
        )}
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-2 pb-4">
          {items.map((item, index) => (
            <li key={index} className="text-lg text-white">
              {item.year} - {item.title}
              {item.institution && ` | ${item.institution}`}
              {item.location && ` | ${item.location}`}
              {item.type && ` | ${item.type}`}
              {item.description && ` | ${item.description}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}