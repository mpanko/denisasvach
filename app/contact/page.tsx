import Image from 'next/image'
import FormattedMarkdown from '../components/FormattedMarkdown'
import { getContact } from '../lib/content'

export default function ContactPage() {
  const { image, body } = getContact()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image src={image} alt="Denisa Svach" width={300} height={400} className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2">
          <FormattedMarkdown content={body} />
        </div>
      </div>
    </div>
  )
}
