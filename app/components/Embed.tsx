import type { ProjectContent } from '../types'

// YouTube, Vimeo and SoundCloud blocks on project pages; renders nothing for other block types.
export default function Embed({ item }: { item: ProjectContent }) {
  if (item.type === 'soundcloud' && item.soundcloudUrl) {
    const url = encodeURIComponent(item.soundcloudUrl)
    return (
      <iframe
        className="w-full"
        height="166"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${url}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      />
    )
  }

  const src =
    item.type === 'youtube' && item.youtubeId ? `https://www.youtube.com/embed/${item.youtubeId}`
    : item.type === 'vimeo' && item.vimeoId ? `https://player.vimeo.com/video/${item.vimeoId}`
    : null
  if (!src) return null

  return (
    <div className={item.vertical ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
      <iframe
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
