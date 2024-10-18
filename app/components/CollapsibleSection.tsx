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
  isLast?: boolean
  addExtraSpace?: boolean
}

export default function CollapsibleSection({ title, items, isLast = false, addExtraSpace = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="py-4 bg-white bg-opacity-0 border-t-2 border-black">
        <button
          className="flex justify-between items-center w-full text-left font-bold text-2xl uppercase"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>{title}</span>
          {isOpen ? (
            <Minus className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </button>
        <div
          className={`mt-4 grid gap-4 transition-all duration-300 ease-in-out ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="border-l-4 border-black pl-4">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm">
                    {item.year}
                    {item.institution && ` | ${item.institution}`}
                    {item.type && ` | ${item.type}`}
                    {item.description && ` | ${item.description}`}
                    {item.location && ` | ${item.location}`}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isLast && <div className="border-t-2 border-black mt-8"></div>}
      {addExtraSpace && <div className="h-16"></div>}
    </>
  )
}