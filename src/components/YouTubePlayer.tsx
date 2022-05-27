import React from 'react'
import { embedURL } from '../api/youtube'
import { useYouTubeSearch } from '../contexts/search.context'

const YouTubePlayer: React.FC = () => {
  const { selectedVideo } = useYouTubeSearch()

  return selectedVideo ? (
    <div>
      <iframe
        src={embedURL + selectedVideo}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  ) : null
}

export default YouTubePlayer
