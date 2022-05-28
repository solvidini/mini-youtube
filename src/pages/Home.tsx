import React from 'react'
import Contents from '../components/Contents'
import Topbar from '../components/ui/Topbar'
import YouTubePlayer from '../components/YouTubePlayer'
import Layout from '../containers/Layout'
import { useYouTubeSearch } from '../contexts/search.context'

const Home = () => {
  const { isPlayerActive } = useYouTubeSearch()

  return (
    <Layout>
      <Topbar />
      <main
        className={`main-content${isPlayerActive ? ' main-content--with-player' : ''}`}
        data-testid='main'
      >
        <YouTubePlayer />
        <Contents />
      </main>
    </Layout>
  )
}

export default Home
