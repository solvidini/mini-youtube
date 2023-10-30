import React from 'react'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import './sass/main.scss'
import { AuthPage } from './pages/AuthPage'
import { HomePage } from './pages/HomePage'
import { YouTubeSearchProvider } from './contexts/search-context'

const queryClient = new QueryClient()

export const App = () => (
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <YouTubeSearchProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </YouTubeSearchProvider>
    </QueryClientProvider>
  </HashRouter>
)
