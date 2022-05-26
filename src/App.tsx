import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './sass/main.scss'
import Auth from './pages/Auth'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
