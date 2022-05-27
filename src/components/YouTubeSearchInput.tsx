import React from 'react'
import { useYouTubeSearch } from '../contexts/search.context'
import SearchInput from './ui/SearchInput'

const YouTubeSearchInput = () => {
  const { phrase, setPhrase } = useYouTubeSearch()

  const handlePhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value)
  }

  return <SearchInput value={phrase} onChange={handlePhraseChange} />
}

export default YouTubeSearchInput
