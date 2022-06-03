import Contents from '../components/Contents'
import Topbar from '../components/ui/Topbar'
import YouTubePlayer from '../components/YouTubePlayer'
import Layout from '../containers/Layout'
import { useYouTubeSearch } from '../contexts/search.context'
import { generateClass } from '../utils/utils'

const Home = () => {
  const { isPlayerActive } = useYouTubeSearch()

  return (
    <Layout>
      <Topbar />
      <main className={generateClass('main-content', { isPlayerActive })} data-testid='main'>
        <YouTubePlayer />
        <Contents />
      </main>
    </Layout>
  )
}

export default Home
