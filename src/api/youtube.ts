export const API_KEY = 'AIzaSyB3nKA1tbpQqkgICsHh3zaB3enGQgEmF2A'
// export const API_KEY = 'AIzaSyDWwmGhpjhskhGwRaesIEX8_db6Ro2G6C8'

// export const API_KEY = 'AIzaSyBi_vwqaqk_x-YgXkcaMAFZkEkMgkhjzFQ'
export const BASE_URL = 'https://www.googleapis.com/youtube/v3'
export const CHANNEL_URL = 'https://www.youtube.com/channel/'
export const EMBED_URL = 'https://www.youtube.com/embed/'

export const baseParams: { [key: string]: any } = {
  part: 'snippet',
  maxResults: 10,
  key: API_KEY,
}
