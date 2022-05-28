// export const API_KEY = 'AIzaSyB3nKA1tbpQqkgICsHh3zaB3enGQgEmF2A'
// export const API_KEY = 'AIzaSyDWwmGhpjhskhGwRaesIEX8_db6Ro2G6C8'

export const API_KEY = 'AIzaSyBi_vwqaqk_x-YgXkcaMAFZkEkMgkhjzFQ'
export const baseURL = 'https://www.googleapis.com/youtube/v3'
export const channelURL = 'https://www.youtube.com/channel/'
export const embedURL = 'https://www.youtube.com/embed/'

export const baseParams: { [key: string]: any } = {
  part: 'snippet',
  maxResults: 10,
  key: API_KEY,
}

export interface ISnippet {
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishTime: string
  publishedAt: string
  title: string
  thumbnails: {
    default: {
      height: number
      width: number
      url: string
    }
    high: {
      height: number
      width: number
      url: string
    }
    medium: {
      height: number
      width: number
      url: string
    }
  }
}

export interface ISearchItem {
  etag: string
  id: {
    kind: string
    videoId?: string
    channelId?: string
  }
  kind: string
  snippet: ISnippet
}

export interface ISearchResponse {
  etag: string
  items: ISearchItem[]
  kind: string
  nextPageToken: string
  pageInfo: {
    resultsPerPage: number
    totalResults: number
  }
  regionCode: string
}
