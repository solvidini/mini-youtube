import React, { FC } from 'react'

import { CHANNEL_URL } from '../config/config'
import { ISearchItem } from '../api/youtube-types'
import { useProgressiveImg } from '../hooks/use-progressive-img'
import { getDateFormat } from '../utils'
import classNames from 'classnames'

type SnippetProps = ISearchItem & {
  onClick: (itemData: ISearchItem) => void
  isPlayerActive: boolean
}

export const Snippet: FC<SnippetProps> = ({ onClick, isPlayerActive, ...itemData }) => {
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
    <div className={classNames('snippet', { 'snippet--player': isPlayerActive })}>
      <div
        className={classNames('snippet__thumbnail', {
          'snippet__thumbnail--player': isPlayerActive,
        })}
        onClick={handleClick}
        onKeyUp={event => {
          if (event.code === 'Enter') handleClick()
        }}
        tabIndex={0}
      >
        <img
          className={classNames('snippet__thumbnail-img', {
            'snippet__thumbnail-img--player': isPlayerActive,
            'snippet__thumbnail-img--channel': isChannel,
          })}
          src={src}
          style={{
            filter: blur ? 'blur(10px)' : 'none',
            transition: blur ? 'none' : 'filter 0.3s ease-out',
          }}
        />
      </div>
      <div className='snippet__content'>
        <h3
          className={classNames('snippet__title', { 'snippet__title--player': isPlayerActive })}
          onClick={handleClick}
        >
          {snippet.title}
        </h3>
        <p className='snippet__date'>{getDateFormat(snippet.publishTime)}</p>
        <a
          href={CHANNEL_URL + snippet.channelId}
          target='_blank'
          className={classNames('snippet__channel', {
            'snippet__channel--channel': isPlayerActive,
          })}
          rel='noreferrer'
        >
          {snippet.channelTitle}
        </a>
        {!isPlayerActive && <p className='snippet__description'>{snippet.description}</p>}
      </div>
    </div>
  )
}
