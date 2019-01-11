import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Homepage from '../components/homepage'


export default ({ data }) => {
  return (
    <Layout path="/" title={data.site.siteMetadata.title} description={data.site.siteMetadata.description}>
      <Homepage />
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