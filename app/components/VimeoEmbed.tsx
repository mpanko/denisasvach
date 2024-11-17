import React from 'react'

interface VimeoEmbedProps {
  videoId: string
  vertical?: boolean
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, vertical = false }) => {
  return (
    <div className={`${vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

export default VimeoEmbed