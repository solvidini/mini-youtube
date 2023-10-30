export interface IThumbnailProps {
  height: number
  width: number
  url: string
}

export interface IThumbnail {
  default: IThumbnailProps
  high: IThumbnailProps
  medium: IThumbnailProps
}

export interface ISnippet {
  channelId: string
  channelTitle: string
  description: string
  liveBroadcastContent: string
  publishTime: string
  publishedAt: string
  title: string
  thumbnails: IThumbnail
}

export type ItemID = {
  kind: string
  videoId?: string
  channelId?: string
}

export interface ISearchItem {
  etag: string
  id: ItemID
  kind: string
  snippet: ISnippet
}

export interface IPageInfo {
  resultsPerPage: number
  totalResults: number
}

export interface ISearchResponse {
  etag: string
  items: ISearchItem[]
  kind: string
  nextPageToken: string
  pageInfo: IPageInfo
  regionCode: string
}
