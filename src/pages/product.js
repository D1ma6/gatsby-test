import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "../components/product.module.css"
import { Link } from "gatsby"

const ComponentName = ({
  data: {
    allContentfulProduct: { nodes: products },
  },
}) => {
  return (
    <Layout>
      <h2>Hello from products</h2>
      <div className={styles.productWrapper}>
        {products.map(product => {
          return (
            <div key={product.id} className={styles.product}>
              <h2>{product.title}</h2>
              <span>£{product.price}</span>
              <Img fluid={product.image.fluid} />
              <Link to={`/products/${product.slog}`}>More details</Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        price
        title
        id
        slog
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
