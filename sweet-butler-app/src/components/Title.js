import React from 'react'

export const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
}