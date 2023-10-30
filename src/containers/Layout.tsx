import React, { FC, ReactNode } from 'react'

export const Layout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='layout'>{children}</div>
)
