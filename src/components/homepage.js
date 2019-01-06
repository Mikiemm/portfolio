import React from 'react'
import styled from '@emotion/styled'

import Header from './header'
import List from './list'

const Homepage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 800px) {
    display: block;
  }
`

export default () => {
  return (
    <Homepage>
      <Header />
      <List />
    </Homepage>
  )
}