import React, { FC } from 'react'

import { CHANNEL_URL, EMBED_URL } from '../config/config'
import { useYouTubeSearch } from '../contexts/search-context'
import { getDateFormat } from '../utils/'

export const YouTubePlayer: FC = () => {
  const { selectedVideo } = useYouTubeSearch()

  return selectedVideo ? (
    <div className='video-content'>
      <div className='youtube-player'>
        <iframe
          src={`${EMBED_URL}${selectedVideo.id.videoId}`}
          width='560'
          height='315'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded YouTube video'
        />
      </div>
      <div className='video-content__info'>
        <h3 className='video-content__title' data-testid='player-title'>
          {selectedVideo.snippet.title}
        </h3>
        <p className='video-content__date' data-testid='player-date'>
          Added {getDateFormat(selectedVideo.snippet.publishTime)}
        </p>
        <a
          href={CHANNEL_URL + selectedVideo.snippet.channelId}
          target='_blank'
          className='video-content__channel'
          rel='noreferrer'
        >
          {selectedVideo.snippet.channelTitle}
        </a>
        <p className='video-content__description'>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  ) : null
}
