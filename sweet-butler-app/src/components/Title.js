import React from 'react'
import styled from 'styled-components'

const TitleDiv = styled.div
`
text-align:center;
`

export const Title = ({ title, subtitle }) => {
  return (
    <TitleDiv>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </TitleDiv>
  )
}