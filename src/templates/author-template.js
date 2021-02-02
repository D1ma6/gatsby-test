import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const AuthorSingle = ({
  data: {
    author: {
      age,
      name,
      photo,
      info: { info },
    },
  },
}) => (
  <Layout>
    <div className="singleAuthor">
      <Link className="singleAuthorLink" to={`/author/`}>
        Go back
      </Link>
      <div className="singleAuthorContainer">
        <h1 className="singleAuthorName">{name}</h1>
        <span className="singleAuthorAge">{age}</span>
      </div>
      <Img className="singleAuthorImg" fluid={photo.fluid} />
      <p className="singleAuthorP">{info}</p>
    </div>
  </Layout>
)

export const query = graphql`
  query GetSingleAuthor($slug: String) {
    author: contentfulAuthor(slug: { eq: $slug }) {
      age
      name
      photo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      info {
        info
      }
    }
  }
`

export default AuthorSingle
