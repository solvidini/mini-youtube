import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { useQuery, UseQueryResult } from 'react-query'

import { baseParams, BASE_URL } from '../config/config'
import { ISearchItem, ISearchResponse } from '../api/youtube-types'

export interface IYouTubeSearch {
  phrase: string
  setPhrase: Dispatch<SetStateAction<string>>
  searchQuery: UseQueryResult<ISearchResponse, unknown>
  selectedVideo: ISearchItem | null
  setSelectedVideo: Dispatch<SetStateAction<ISearchItem | null>>
  isPlayerActive: boolean
}

const YouTubeSearchContext = createContext<IYouTubeSearch>({} as IYouTubeSearch)

export const YouTubeSearchProvider: FC<{
  children?: ReactNode
  value?: Partial<IYouTubeSearch>
}> = ({ children, value }) => {
  const [selectedVideo, setSelectedVideo] = useState<ISearchItem | null>(
    value?.selectedVideo || null,
  )
  const [phrase, setPhrase] = useState<string>(value?.phrase || '')

  const searchQuery = useQuery<ISearchResponse, unknown>(
    ['youtube', 'search', selectedVideo],
    async (): Promise<ISearchResponse> => {
      const url = new URL(`${BASE_URL}/search`)

      if (selectedVideo?.id?.videoId) {
        // Unfortunately this is now deprecated
        // url.searchParams.append('relatedToVideoId', selectedVideo.id.videoId)
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

export const useYouTubeSearch = () => useContext(YouTubeSearchContext)
