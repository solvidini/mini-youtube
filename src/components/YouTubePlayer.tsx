import React from 'react'
import { useYouTubeSearch } from '../contexts/search.context'

const YouTubePlayer: React.FC<{ embedId?: string }> = () => {
  const { selectedVideo } = useYouTubeSearch()

  return selectedVideo ? (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${selectedVideo}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  ) : null
}

export default YouTubePlayer
