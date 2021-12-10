import React from 'react'
import Nav from './Nav'
import { Title } from './Title'

export const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title title="Sweet Butler" subtitle="How are you feeling today?" />
      <Nav />

      {children}
    </div>
  )
}
