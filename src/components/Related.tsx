import React from 'react'
import { useYouTubeSearch } from '../contexts/search.context'
import Snippet from './Snippet'

const Related = () => {
  const { searchQuery, setSelectedVideo } = useYouTubeSearch()

  const choiceHandler = (id: string) => {
    setSelectedVideo(id)
  }

  if (searchQuery.isError) return <div>Couldnt fetch data</div>
  if (searchQuery.isLoading) return <div>Loading...</div>

  return (
    <div style={{ display: 'flex' }}>
      {searchQuery?.data?.items.map(item => (
        <Snippet key={item.id.videoId} {...item} onClick={choiceHandler} />
      ))}
    </div>
  )
}

export default Related
