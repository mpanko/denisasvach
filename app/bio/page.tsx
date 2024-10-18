import React from 'react'
import CollapsibleSection from '../components/CollapsibleSection'
import { bioSummary, bioSections } from '../data/bioData'

export default function BioPage() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-5xl font-bold mb-12 uppercase text-center">About Denisa Svach</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5">
          <div className="sticky top-24">
            {bioSummary.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="space-y-0">
            <div className="border-t-2 border-black mt-2"></div>
            <CollapsibleSection title="Education" items={bioSections.education} />
            <CollapsibleSection title="Residencies" items={bioSections.residencies} />
            <CollapsibleSection title="Scenography" items={bioSections.scenography} />
            <CollapsibleSection title="Solo & Duo Shows" items={bioSections.soloAndDuoShows} />
            <CollapsibleSection title="Group Exhibitions" items={bioSections.groupExhibitions} />
            <CollapsibleSection title="Performances" items={bioSections.performances} />
          </div>
        </div>
      </div>
    </div>
  )
}