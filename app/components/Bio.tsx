import React from 'react';
import CollapsibleSection from './CollapsibleSection';
import { bioSummary, bioSections } from '../data/bioData';

const Bio: React.FC = () => (
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-light mb-8 tracking-wide">About Denisa Svach</h1>
    {bioSummary.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-lg mb-6 leading-relaxed text-gray-700">
        {paragraph}
      </p>
    ))}
    
    <div className="mt-12 space-y-6">
      <CollapsibleSection title="Residencies" items={bioSections.residencies} />
      <CollapsibleSection title="Scenography" items={bioSections.scenography} />
      {/* Add other sections here */}
    </div>
  </div>
);

export default Bio;