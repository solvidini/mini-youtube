import React from 'react'
import { channelURL, ISearchItem } from '../api/youtube'
import { getDateFormat } from '../utils/utils'

type SnippetProps = ISearchItem & { onClick: (id: string) => void }

const Snippet: React.FC<SnippetProps> = ({ onClick, id, snippet }) => (
  <div className='snippet'>
    <img
      className='snippet__thumbnail'
      src={snippet.thumbnails.medium.url}
      onClick={() => onClick(id.videoId)}
    />
    <div className='snippet__content'>
      <h3 className='snippet__title' onClick={() => onClick(id.videoId)}>
        {snippet.title}
      </h3>
      <p className='snippet__date'>{getDateFormat(snippet.publishTime)}</p>
      <a href={channelURL + snippet.channelId} className='snippet__channel'>
        {snippet.channelTitle}
      </a>
      <p className='snippet__description'>{snippet.description}</p>
    </div>
  </div>
)

export default Snippet
