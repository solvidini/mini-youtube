import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { baseParams, BASE_URL, ISearchItem, ISearchResponse } from '../api/youtube'

export interface IYouTubeSearch {
  phrase: string
  setPhrase: React.Dispatch<React.SetStateAction<string>>
  searchQuery: UseQueryResult<ISearchResponse, unknown>
  selectedVideo: ISearchItem | null
  setSelectedVideo: React.Dispatch<React.SetStateAction<ISearchItem | null>>
  isPlayerActive: boolean
}

export interface IProviderDefaults {
  selectedVideo?: ISearchItem
  phrase?: string
}

const YouTubeSearchContext = React.createContext<IYouTubeSearch>({} as IYouTubeSearch)

export const YouTubeSearchProvider: React.FC<{
  children?: React.ReactNode
  value?: IProviderDefaults
}> = ({ children, value }) => {
  const [selectedVideo, setSelectedVideo] = React.useState<ISearchItem | null>(
    value?.selectedVideo || null,
  )
  const [phrase, setPhrase] = React.useState<string>(value?.phrase || '')

  const searchQuery = useQuery<ISearchResponse, unknown>(
    ['youtube', 'search', selectedVideo],
    async (): Promise<ISearchResponse> => {
      const url = new URL(`${BASE_URL}/search`)

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
