import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styles from "../components/product.module.css"

const ComponentName = ({ data: { product } }) => (
  <Layout>
    <div className={styles.singleProduct}>
      <Link to="/product">Back to products</Link>
      <h1 class={styles.singleTitle}>{product.title}</h1>
      <Img fluid={product.image.fixed} className={styles.singleImg} />
      <p className={styles.description}>{product.description.description}</p>
      <p className={styles.price}>£{product.price}</p>
    </div>
  </Layout>
)

export const query = graphql`
  query GetSingleProduct($slog: String) {
    product: contentfulProduct(slog: { eq: $slog }) {
      title
      price
      description {
        description
      }
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
