const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/projectTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
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

    const edges = result.data.allMarkdownRemark.edges

    edges.forEach(({ node }, index) => {
      const prev = index > 0 ? edges[index - 1].node.frontmatter.path : undefined
      const next = index + 1 < edges.length ? edges[index + 1].node.frontmatter.path : undefined

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: { prev, next }, // additional data can be passed via context
      })
    })
  })
}