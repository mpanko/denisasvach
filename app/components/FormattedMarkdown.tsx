import React from 'react'
import ReactMarkdown from 'react-markdown'

interface FormattedMarkdownProps {
  content: string
}

export default function FormattedMarkdown({ content }: FormattedMarkdownProps) {
  return (
    <ReactMarkdown 
      className="prose max-w-none"
      components={{
        a: ({...props}) => <a className="underline hover:bg-black hover:text-white" {...props} />,
        ul: ({...props}) => <ul className="space-y-4" {...props} />,
        li: ({...props}) => <li className="text-lg" {...props} />,
        p: ({...props}) => <p className="text-lg mb-6 leading-relaxed" {...props} />,
        h1: ({...props}) => <h1 className="text-4xl font-bold mb-6 uppercase" {...props} />,
        h2: ({...props}) => <h2 className="text-3xl font-bold mb-4 uppercase" {...props} />,
        h3: ({...props}) => <h3 className="text-2xl font-bold mb-3 uppercase" {...props} />,
        h4: ({...props}) => <h4 className="text-xl font-bold mb-2 uppercase" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}