import React from 'react'
import Related from '../components/Related'
import Topbar from '../components/UI/Topbar'
import YouTubePlayer from '../components/YouTubePlayer'

const Home = () => {
  return (
    <div>
      <Topbar />
      <div>
        <YouTubePlayer />
        <Related />
      </div>
    </div>
  )
}

export default Home
