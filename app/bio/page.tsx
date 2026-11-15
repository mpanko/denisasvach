import CollapsibleSection from '../components/CollapsibleSection'
import FormattedMarkdown from '../components/FormattedMarkdown'
import { getBio } from '../lib/content'

export default function BioPage() {
  const { sections, body } = getBio()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <div className="sticky top-24 pt-4">
            <FormattedMarkdown content={body} />
          </div>
        </div>
        <div className="md:w-3/5 pb-16 divide-y-2 divide-black">
          {sections.map((section) => (
            <CollapsibleSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  )
}
