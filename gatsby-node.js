const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/pages/projects.js`)

  return graphql(`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            cover {
              url
              image {
                childImageSharp {
                  original {
                    width
                    height
                    src
                  }
                  fluid(quality: 95, srcSetBreakpoints: [200, 400, 600, 800], maxWidth: 9999999) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const edges = result.data.allMarkdownRemark.edges

    edges.forEach(({ node }, index) => {
      const next = edges.concat(edges.slice(0, index)).slice(index + 1, index + 4)

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: { next }, // additional data can be passed via context
      })
    })
  })
}