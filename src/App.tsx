import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import './sass/main.scss'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { YouTubeSearchProvider } from './contexts/search.context'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <YouTubeSearchProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </YouTubeSearchProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
