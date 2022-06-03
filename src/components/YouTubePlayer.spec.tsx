import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IYouTubeSearch, YouTubeSearchProvider } from '../contexts/search.context'
import YouTubePlayer from './YouTubePlayer'
import { youTubeResponse } from '../utils/search-mocks'

const queryClient = new QueryClient()

const renderWithWrapper = (value?: Partial<IYouTubeSearch>) =>
  render(
    <QueryClientProvider client={queryClient}>
      <YouTubeSearchProvider value={value}>
        <YouTubePlayer />
      </YouTubeSearchProvider>
    </QueryClientProvider>,
  )

describe('<YouTubePlayer />', () => {
  test('Should return null if no selectedVideo is provided.', () => {
    const { container } = renderWithWrapper()
    expect(container.firstChild).toBe(null)
  })

  test('Should return YouTube player with correct content data.', () => {
    const firstSnippet = youTubeResponse.items[0]

    renderWithWrapper({ selectedVideo: firstSnippet })

    expect(screen.getByTitle('Embedded YouTube video')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/W1VhpSK0yNA',
    )
    expect(screen.getByTestId('player-title').textContent).toBe(
      'Proste wyjaśnienie  czwartego wymiaru (4D)',
    )
    expect(screen.getByTestId('player-date').textContent).toBe('Added Jun 12 2019')
  })
})
