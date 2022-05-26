export const API_KEY = 'AIzaSyBi_vwqaqk_x-YgXkcaMAFZkEkMgkhjzFQ'
export const baseURL = 'https://www.googleapis.com/youtube/v3'

export const baseParams: { [key: string]: any } = {
  part: 'snippet',
  maxResults: 5,
  key: API_KEY,
}

export interface ISnippet {
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishTime: string
  publishedAt: string
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
    videoId: string
  }
  kind: string
  snippet: ISnippet
  title: string
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
