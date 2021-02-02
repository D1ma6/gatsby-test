const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query GetPages {
      product: allContentfulProduct {
        nodes {
          slog
        }
      }
      author: allContentfulAuthor {
        nodes {
          slug
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.product.nodes.forEach(product => {
      createPage({
        path: `/products/${product.slog}`,
        component: path.resolve(`src/templates/product-template.js`),
        context: {
          slog: product.slog,
        },
      })
    })
    result.data.author.nodes.forEach(author => {
      createPage({
        path: `/author/${author.slug}`,
        component: path.resolve(`src/templates/author-template.js`),
        context: {
          slug: author.slug,
        },
      })
    })
  })
}
