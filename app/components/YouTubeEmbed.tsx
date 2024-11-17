import React from 'react'

interface YouTubeEmbedProps {
  videoId: string
  vertical?: boolean
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, vertical = false }) => {
  return (
    <div className={`${vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  )
}

export default YouTubeEmbed