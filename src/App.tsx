import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import './sass/main.scss'
import Auth from './pages/Auth'
import Home from './pages/Home'
import { YouTubeSearchProvider } from './contexts/search.context'

const queryClient = new QueryClient()

function App() {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <YouTubeSearchProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </YouTubeSearchProvider>
      </QueryClientProvider>
    </HashRouter>
  )
}

export default App
