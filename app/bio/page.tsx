import React from 'react'
import Bio from '../components/Bio'

export default function BioPage() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      <h1 className="text-4xl font-light mb-8 tracking-wide text-white">Bio</h1>
      <Bio />
    </div>
  )
}