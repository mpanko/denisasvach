import ReactMarkdown from 'react-markdown'

// Body text of the Bio and Contact pages.
export default function FormattedMarkdown({ content }: { content: string }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        components={{
          // `node` is react-markdown's syntax tree; keep it out of the HTML.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          p: ({ node, ...props }) => <p className="text-lg mb-6 leading-relaxed" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
