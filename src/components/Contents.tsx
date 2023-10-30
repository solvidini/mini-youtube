import React from 'react'

import { ISearchItem } from '../api/youtube-types'
import { useYouTubeSearch } from '../contexts/search-context'
import { Snippet } from './Snippet'
import { SnippetSkeleton } from './SnippetSkeleton'
import classNames from 'classnames'

export const Contents = () => {
  const { searchQuery, setSelectedVideo, isPlayerActive } = useYouTubeSearch()

  const choiceHandler = (itemData: ISearchItem) => {
    setSelectedVideo(itemData)
  }

  if (searchQuery.isError)
    return <div className='error-message'>Reached daily limit for search requests.</div>

  return (
    <div
      className={classNames('contents', {
        'contents--player': isPlayerActive,
      })}
      data-testid='contents'
    >
      {searchQuery.isFetching
        ? Array.from({ length: 6 }, (_, index) => (
            <SnippetSkeleton key={`skeleton-${index}`} isPlayerActive={isPlayerActive} />
          ))
        : searchQuery?.data?.items?.map(item => (
            <Snippet
              key={item.id.videoId || item.id.channelId}
              id={item.id}
              etag={item.etag}
              kind={item.kind}
              snippet={item.snippet}
              onClick={choiceHandler}
              isPlayerActive={isPlayerActive}
            />
          ))}
    </div>
  )
}
