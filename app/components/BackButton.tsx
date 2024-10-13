import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const BackButton: React.FC = () => (
  <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200">
    <ArrowLeft className="w-5 h-5 mr-2" />
    Portfolio
  </Link>
)

export default BackButton