import React from 'react'
import { embedURL } from '../api/youtube'
import { useYouTubeSearch } from '../contexts/search.context'
import { getDateFormat } from '../utils/utils'

const YouTubePlayer: React.FC = () => {
  const { selectedVideo } = useYouTubeSearch()

  return selectedVideo ? (
    <div className='video-content'>
      <div className='youtube-player'>
        <iframe
          src={embedURL + selectedVideo.id.videoId}
          width='560'
          height='315'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </div>
      <div className='video-content__info'>
        <h3 className='video-content__title'>{selectedVideo.snippet.title}</h3>
        <p className='video-content__date'>
          Added {getDateFormat(selectedVideo.snippet.publishTime)}
        </p>
        <p className='video-content__description'>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  ) : null
}

export default YouTubePlayer
