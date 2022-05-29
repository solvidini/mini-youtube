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
