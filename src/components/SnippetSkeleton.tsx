import React, { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import classNames from 'classnames'

export const SnippetSkeleton: FC<{ isPlayerActive: boolean }> = ({ isPlayerActive }) => (
  <SkeletonTheme baseColor='#313131' highlightColor='#515151'>
    <div className={classNames('snippet', { 'snippet--player': isPlayerActive })}>
      <div
        className={classNames('snippet__thumbnail', {
          'snippet__thumbnail--player': isPlayerActive,
        })}
        style={{ height: isPlayerActive ? '10rem' : 'auto', width: '100%' }}
      >
        <Skeleton
          containerClassName='skeleton-auto-dimensions'
          className='skeleton-max-dimensions'
        />
      </div>
      <div className='snippet__content'>
        <h3
          className={classNames('snippet__title', { 'snippet__title--player': isPlayerActive })}
          style={{ lineHeight: 1 }}
        >
          <Skeleton />
        </h3>
        <p className='snippet__date' style={{ lineHeight: 1, width: '40%' }}>
          <Skeleton />
        </p>
        {!isPlayerActive && (
          <p className='snippet__description' style={{ lineHeight: 2 }}>
            <Skeleton count={2} />
          </p>
        )}
      </div>
    </div>
  </SkeletonTheme>
)
