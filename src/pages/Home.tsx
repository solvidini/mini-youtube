import React from 'react'
import Contents from '../components/Contents'
import Topbar from '../components/ui/Topbar'
import YouTubePlayer from '../components/YouTubePlayer'
import Layout from '../containers/Layout'

const Home = () => {
  return (
    <Layout>
      <Topbar />
      <div>
        <YouTubePlayer />
        <Contents />
      </div>
    </Layout>
  )
}

export default Home
