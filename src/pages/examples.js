import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const examples = props => {
  console.log(props)
  return (
    <Layout>
      <p>This is the example page</p>
      <Header />
      <HeaderStatic />
      <h3>this is the page query</h3>
      <h3>{props.data.site.siteMetadata.author}</h3>
    </Layout>
  )
}
export const data = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        data
        description
        title
        persons {
          age
          name
        }
      }
    }
  }
`
export default examples
