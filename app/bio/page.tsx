import React from 'react'
import CollapsibleSection from '../components/CollapsibleSection'
import FormattedMarkdown from '../components/FormattedMarkdown'
import { getMarkdownContent } from '../utils/markdown'
import { Bio } from '../types'

export default async function BioPage() {
  const { frontMatter, content } = await getMarkdownContent('bio.md')
  const bioData = frontMatter as Bio

  return (
    <div className="container mx-auto px-4 pt-6 pb-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <div className="sticky top-24 pt-4">
            <FormattedMarkdown content={content} />
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="space-y-0">
            {bioData.sections.map((section, index) => (
              <CollapsibleSection 
                key={section.title}
                title={section.title} 
                items={section.items} 
                isFirst={index === 0}
              />
            ))}
            <div className="h-16"></div>
          </div>
        </div>
      </div>
    </div>
  )
}