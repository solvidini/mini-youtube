import React from 'react'
import { useYouTubeSearch } from '../contexts/search.context'
import SearchInput from './ui/SearchInput'

const YouTubeSearchInput = () => {
  const { phrase, setPhrase, searchQuery, setSelectedVideo } = useYouTubeSearch()

  const handlePhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchQuery.refetch()
    setSelectedVideo(null)
  }

  return <SearchInput value={phrase} onChange={handlePhraseChange} onSubmit={onSubmit} />
}

export default YouTubeSearchInput
