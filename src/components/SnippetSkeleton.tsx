import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { generateClass } from '../utils/utils'

const SnippetSkeleton: React.FC<{ isPlayer: boolean }> = ({ isPlayer }) => (
  <SkeletonTheme baseColor='#313131' highlightColor='#515151'>
    <div className={generateClass('snippet', { isPlayer })}>
      <div
        className={generateClass('snippet__thumbnail', { isPlayer })}
        style={{ height: isPlayer ? '10rem' : 'auto', width: '100%' }}
      >
        <Skeleton
          containerClassName='skeleton-auto-dimensions'
          className='skeleton-max-dimensions'
        />
      </div>
      <div className='snippet__content'>
        <h3 className={generateClass('snippet__title', { isPlayer })} style={{ lineHeight: 1 }}>
          <Skeleton />
        </h3>
        <p className='snippet__date' style={{ lineHeight: 1, width: '40%' }}>
          <Skeleton />
        </p>
        {!isPlayer && (
          <p className='snippet__description' style={{ lineHeight: 2 }}>
            <Skeleton count={2} />
          </p>
        )}
      </div>
    </div>
  </SkeletonTheme>
)

export default SnippetSkeleton
