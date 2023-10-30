import React, { ChangeEvent, FormEvent } from 'react'

import { useYouTubeSearch } from '../contexts/search-context'
import { SearchInput } from './ui/SearchInput'

export const YouTubeSearchInput = () => {
  const { phrase, setPhrase, searchQuery, setSelectedVideo } = useYouTubeSearch()

  const handlePhraseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchQuery.refetch()
    setSelectedVideo(null)
  }

  // I would also add suggestions to the YouTubeSearchInput (We could also use f.e. local storage to store the previous searches)
  return <SearchInput value={phrase} onChange={handlePhraseChange} onSubmit={onSubmit} />
}
