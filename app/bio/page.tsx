import React from 'react'
import CollapsibleSection from '../components/CollapsibleSection'
import FormattedMarkdown from '../components/FormattedMarkdown'
import { getMarkdownContent } from '../utils/markdown'

export default async function BioPage() {
  const { frontMatter, content } = await getMarkdownContent('bio.md')

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
            <CollapsibleSection title="Education" items={frontMatter.education} isFirst={true} />
            <CollapsibleSection title="Residencies" items={frontMatter.residencies} />
            <CollapsibleSection title="Scenography" items={frontMatter.scenography} />
            <CollapsibleSection title="Solo & Duo Shows" items={frontMatter.soloAndDuoShows} />
            <CollapsibleSection title="Group Exhibitions" items={frontMatter.groupExhibitions} />
            <CollapsibleSection title="Performances" items={frontMatter.performances} />
            <div className="h-16"></div> {/* Extra space added here */}
          </div>
        </div>
      </div>
    </div>
  )
}