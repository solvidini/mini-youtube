import React from 'react'
import { ISearchItem } from '../api/youtube'

type SnippetProps = ISearchItem & { onClick: (id: string) => void }

const Snippet: React.FC<SnippetProps> = ({ onClick, id, snippet, title }) => (
  <div
    onClick={() => onClick(id.videoId)}
    style={{ width: 100, height: 100, border: '1px solid gray' }}
  >
    <img src={snippet.thumbnails.default.url} />
    <div>
      <h3>{title}</h3>
      <p>{snippet.description}</p>
    </div>
  </div>
)

export default Snippet
