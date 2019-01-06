const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/projectTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      })
    })
  })
}