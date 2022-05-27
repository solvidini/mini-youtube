import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { baseParams, baseURL, ISearchResponse } from '../api/youtube'

export interface ISearch {
  phrase: string
  setPhrase: React.Dispatch<React.SetStateAction<string>>
  searchQuery: UseQueryResult<ISearchResponse, unknown>
  selectedVideo: string | null
  setSelectedVideo: React.Dispatch<React.SetStateAction<string | null>>
}

const YouTubeSearchContext = React.createContext<ISearch>({} as ISearch)

export const SearchProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null)
  const [phrase, setPhrase] = React.useState<string>('')

  const searchQuery = useQuery<ISearchResponse, unknown>(
    // ['youtube', 'search', phrase],
    ['youtube', 'search'],
    async (): Promise<ISearchResponse> => {
      const url = new URL(`${baseURL}/search`)

      Object.keys(baseParams).forEach(key => url.searchParams.append(key, baseParams[key]))

      url.searchParams.append('q', phrase)

      const response = await fetch(url.toString(), {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      })

      if (response.status === 403) throw new Error('Exceeded maximum requests per day.')

      return response.json()
    },
    { refetchOnWindowFocus: false },
  )

  return (
    <YouTubeSearchContext.Provider
      value={{ phrase, setPhrase, searchQuery, selectedVideo, setSelectedVideo }}
    >
      {children}
    </YouTubeSearchContext.Provider>
  )
}

export const useYouTubeSearch = () => React.useContext(YouTubeSearchContext)
