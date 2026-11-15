import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

// Body text of the Bio and Contact pages.
export default function FormattedMarkdown({ content }: { content: string }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown
        // The CMS saves Shift+Enter as a plain newline; show it as a line break.
        remarkPlugins={[remarkBreaks]}
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
