import { CHANNEL_URL } from '../api/youtube'
import { ISearchItem } from '../api/youtube-types'
import useProgressiveImg from '../hooks/use-progressive-img'
import { generateClass, getDateFormat } from '../utils/utils'

type SnippetProps = ISearchItem & {
  onClick: (itemData: ISearchItem) => void
  isPlayer: boolean
}

const Snippet: React.FC<SnippetProps> = ({ onClick, isPlayer, ...itemData }) => {
  const { snippet } = itemData
  const [src, { blur }] = useProgressiveImg(
    snippet?.thumbnails.default.url || '',
    snippet?.thumbnails.medium.url || '',
  )
  const isChannel = !!itemData.id.channelId

  const handleClick = () => {
    if (!isChannel) {
      window.scrollTo(0, 0)
      onClick(itemData)
    } else {
      window.open(CHANNEL_URL + itemData.id.channelId, '_blank')
    }
  }

  if (!snippet) return null

  return (
    <div className={generateClass('snippet', { isPlayer })}>
      <div
        className={generateClass('snippet__thumbnail', { isPlayer })}
        onClick={handleClick}
        onKeyUp={event => {
          if (event.code === 'Enter') handleClick()
        }}
        tabIndex={0}
      >
        <img
          className={generateClass('snippet__thumbnail-img', {
            isPlayer,
            isChannel,
          })}
          src={src}
          style={{
            filter: blur ? 'blur(10px)' : 'none',
            transition: blur ? 'none' : 'filter 0.3s ease-out',
          }}
        />
      </div>
      <div className='snippet__content'>
        <h3 className={generateClass('snippet__title', { isPlayer })} onClick={handleClick}>
          {snippet.title}
        </h3>
        <p className='snippet__date'>{getDateFormat(snippet.publishTime)}</p>
        <a
          href={CHANNEL_URL + snippet.channelId}
          target='_blank'
          className={generateClass('snippet__channel', { isPlayer })}
          rel='noreferrer'
        >
          {snippet.channelTitle}
        </a>
        {!isPlayer && <p className='snippet__description'>{snippet.description}</p>}
      </div>
    </div>
  )
}

export default Snippet
