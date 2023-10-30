import React from 'react'

import { Contents } from '../components/Contents'
import { Topbar } from '../components/ui/Topbar'
import { YouTubePlayer } from '../components/YouTubePlayer'
import { Layout } from '../containers/Layout'
import { useYouTubeSearch } from '../contexts/search-context'
import classNames from 'classnames'

export const HomePage = () => {
  const { isPlayerActive } = useYouTubeSearch()

  return (
    <Layout>
      <Topbar />
      <main
        className={classNames('main-content', { 'main-content--player': isPlayerActive })}
        data-testid='main'
      >
        <YouTubePlayer />
        <Contents />
      </main>
    </Layout>
  )
}
