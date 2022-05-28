import React from 'react'
import YouTubeSearchInput from '../YouTubeSearchInput'
import YouTubeLogo from '../../assets/youtube-logo.png'
import { useYouTubeSearch } from '../../contexts/search.context'

const Topbar = () => {
  const { setSelectedVideo } = useYouTubeSearch()

  return (
    <div className='topbar'>
      <div className='topbar__logo' onClick={() => setSelectedVideo(null)}>
        <img src={YouTubeLogo} alt='Logo' />
        <span>Mini YouTube</span>
      </div>
      <YouTubeSearchInput />
      <div />
    </div>
  )
}

export default Topbar
