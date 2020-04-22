const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `PagesDataYaml`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allPagesDataYaml {
        edges {
          node {
            fields {
              slug
            }
            title
            exercises {
              title
              videoSrc
            }
          }
        }
      }
    }
  `)

  result.data.allPagesDataYaml.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/activity.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
