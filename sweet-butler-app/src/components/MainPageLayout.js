import React from 'react'
import Nav from './Nav'
import { Title } from './Title'

export const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Title title="Sweet Butler" />
      {children}
    </div>
  )
}
