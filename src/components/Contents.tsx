import React from 'react'
import { ISearchItem } from '../api/youtube'
import { useYouTubeSearch } from '../contexts/search.context'
import { generateClass } from '../utils/utils'
import Snippet from './Snippet'
import SnippetSkeleton from './SnippetSkeleton'

const Contents = () => {
  const { searchQuery, setSelectedVideo, isPlayerActive } = useYouTubeSearch()

  const choiceHandler = (itemData: ISearchItem) => {
    setSelectedVideo(itemData)
  }

  if (searchQuery.isError)
    return <div className='error-message'>Reached daily limit for search requests.</div>

  return (
    <div className={generateClass('contents', { isPlayer: isPlayerActive })}>
      {searchQuery.isFetching
        ? Array.from(new Array(6)).map((_, index) => (
            <SnippetSkeleton key={`skeleton-${index}`} isPlayer={isPlayerActive} />
          ))
        : searchQuery?.data?.items.map(item => (
            <Snippet
              key={item.id.videoId}
              {...item}
              onClick={choiceHandler}
              isPlayer={isPlayerActive}
            />
          ))}
    </div>
  )
}

export default Contents
