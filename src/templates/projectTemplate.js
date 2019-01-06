import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Detail from '../components/detail'

export default function Template({
  data, 
}) {
  const { markdownRemark, site: { siteMetadata } } = data 
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  return (
    <Layout title={`${frontmatter.title} | ${siteMetadata.title}`} description={excerpt || siteMetadata.description} path={frontmatter.path}>
      <Detail title={frontmatter.title} htmlAst={htmlAst} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      excerpt
      frontmatter {
        path
        title
      }
    }
  }
`