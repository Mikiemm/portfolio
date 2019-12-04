import React, { useLayoutEffect } from "react"
import styled from '@emotion/styled'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import List from '../components/list'

const Homepage = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 1024px) {
    display: block;
  }
`

export default ({ data }) => {

  useLayoutEffect(() => {
    const resizeCallback = () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    resizeCallback()
    window.addEventListener('resize', resizeCallback)

    return () => window.removeEventListener('resize', resizeCallback)
  }, [data])

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