import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { YouTubeSearchInput } from '../YouTubeSearchInput'
import { useYouTubeSearch } from '../../contexts/search-context'
import { MenuToggler } from './MenuToggler'
import { MenuModal } from '../MenuModal'

import YouTubeLogo from '../../assets/youtube-logo.png'

export const Topbar: FC<{ showSearchInput?: boolean }> = ({ showSearchInput = true }) => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState<boolean>(false)
  const { setSelectedVideo } = useYouTubeSearch()

  const handleLogoClick = () => {
    setSelectedVideo(null)
    navigate('/')
  }

  return (
    <div className='topbar'>
      <div className='topbar__logo' onClick={handleLogoClick}>
        <img
          src={YouTubeLogo}
          alt='Logo'
          tabIndex={0}
          onKeyUp={event => {
            if (event.code === 'Enter') handleLogoClick()
          }}
        />
        <span>Mini YouTube</span>
      </div>
      <div className='topbar__middle'>{showSearchInput && <YouTubeSearchInput />}</div>
      <div className='topbar__menu'>
        <MenuToggler onClick={() => setShowModal(true)} />
      </div>
      <MenuModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
