import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import nock from 'nock'

import { YouTubeSearchProvider } from '../contexts/search-context'
import { HomePage } from './HomePage'
import { youTubeResponse } from '../utils/search-mocks'

const queryClient = new QueryClient()

const renderWithWrapper = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <YouTubeSearchProvider>
        <HomePage />
      </YouTubeSearchProvider>
    </QueryClientProvider>,
  )

describe('<HomePage />', () => {
  afterEach(() => {
    if (!nock.isDone()) {
      throw new Error(`Not all nock interceptors were used: ${JSON.stringify(nock.pendingMocks())}`)
    }
    nock.cleanAll()
  })

  test('Should render HomePage with 10 snippets but without Player.', async () => {
    const query = nock('https://www.googleapis.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/youtube/v3/search')
      .query(true)
      .reply(200, youTubeResponse)

    renderWithWrapper()

    // We have 6 skeleton loaders, let's check it before the query is finished.
    expect(screen.getByTestId('contents').childNodes.length).toBe(6)

    await waitFor(() => {
      expect(query.isDone()).toBeTruthy()
    })

    // We didn't click any element, so in main content there should be only snippets, without a player
    expect(screen.getByTestId('main').childNodes.length).toBe(1)
    // After query is done, 10 snippets should be loaded.
    expect(screen.getByTestId('contents').childNodes.length).toBe(10)
  })

  test('Should load specific data of the chosen item into the player.', async () => {
    const query = nock('https://www.googleapis.com')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/youtube/v3/search')
      .query(true)
      .reply(200, youTubeResponse)

    renderWithWrapper()

    await waitFor(() => {
      expect(query.isDone()).toBeTruthy()
    })

    const secondItemTitle = screen.getByText(
      'Hipotetyczna podwodna pozaziemska cywilizacja [Podcast]',
    )

    expect(secondItemTitle).toBeInTheDocument()

    expect(screen.getByTestId('main').childNodes.length).toBe(1)
    fireEvent.click(secondItemTitle)
    // After clicking the second element from the list, data should be loaded into the player.
    expect((await screen.findByTestId('main')).childNodes.length).toBe(2)
    expect(screen.getByTitle('Embedded YouTube video')).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/yIcntXsOxpg',
    )
  })
})
