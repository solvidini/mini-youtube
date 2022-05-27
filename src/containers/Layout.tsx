import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className='layout'>{children}</div>
)

export default Layout
