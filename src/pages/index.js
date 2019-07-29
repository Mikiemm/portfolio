import React from "react"
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import List from '../components/list'

const Homepage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 800px) {
    display: block;
  }
`

export default ({ data }) => {
  return (
    <Layout path="/" title={data.site.siteMetadata.title} description={data.site.siteMetadata.description}>
      <Homepage>
        <Header />
        <List />
      </Homepage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`