import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { baseParams, baseURL, ISearchItem, ISearchResponse } from '../api/youtube'
import dummyData from '../utils/dummy-data.json'

export interface ISearch {
  phrase: string
  setPhrase: React.Dispatch<React.SetStateAction<string>>
  searchQuery: UseQueryResult<ISearchResponse, unknown>
  selectedVideo: ISearchItem | null
  setSelectedVideo: React.Dispatch<React.SetStateAction<ISearchItem | null>>
  isPlayerActive: boolean
}

const YouTubeSearchContext = React.createContext<ISearch>({} as ISearch)

export const SearchProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [selectedVideo, setSelectedVideo] = React.useState<ISearchItem | null>(null)
  const [phrase, setPhrase] = React.useState<string>('')

  const searchQuery = useQuery<ISearchResponse, unknown>(
    ['youtube', 'search', selectedVideo],
    async (): Promise<ISearchResponse> => {
      const url = new URL(`${baseURL}/search`)

      if (selectedVideo?.id?.videoId) {
        url.searchParams.append('relatedToVideoId', selectedVideo.id.videoId)
        url.searchParams.append('type', 'video')
      } else {
        url.searchParams.append('q', phrase)
      }
      Object.keys(baseParams).forEach(key => url.searchParams.append(key, baseParams[key]))

      const response = await fetch(url.toString(), {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      })

      if (response.status === 403) throw new Error('Reached daily limit for search requests.')

      return response.json()
    },
    { refetchOnWindowFocus: false },
  )

  // searchQuery.data = dummyData

  return (
    <YouTubeSearchContext.Provider
      value={{
        phrase,
        setPhrase,
        searchQuery,
        selectedVideo,
        setSelectedVideo,
        isPlayerActive: !!selectedVideo,
      }}
    >
      {children}
    </YouTubeSearchContext.Provider>
  )
}

export const useYouTubeSearch = () => React.useContext(YouTubeSearchContext)
