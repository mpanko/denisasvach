import React from 'react'
import Image from 'next/image'
import FormattedMarkdown from '../components/FormattedMarkdown'
import { getMarkdownContent } from '../utils/markdown'
import { Contact } from '../types'

export default async function ContactPage() {
  const { frontMatter, content } = await getMarkdownContent('contact.md')
  const contactData = frontMatter as Contact

  return (
    <div className="container mx-auto px-4 pt-6 pb-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={contactData.image}
            alt="Denisa Svach"
            width={300}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <FormattedMarkdown content={content} />
        </div>
      </div>
    </div>
  )
}