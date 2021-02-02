import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

const AuthorSingle = ({
  data: {
    author: { nodes: authors },
  },
}) => (
  <Layout>
    <div className="authorContainer">
      {authors.map(author => {
        return (
          <div className="author">
            <div className="authorName">
              <h1>{author.name}</h1>
              <span>{author.age}</span>
            </div>
            <Img className="authorImg" fixed={author.photo.fixed} />
            <p className="authorPara">{author.info.info}</p>
            <div className="authorLink">
              <Link to={`/author/${author.slug}`}>See more</Link>
            </div>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  {
    author: allContentfulAuthor {
      nodes {
        slug
        photo {
          fixed {
            ...GatsbyContentfulFixed
          }
        }
        name
        age
        info {
          info
        }
      }
    }
  }
`

export default AuthorSingle
