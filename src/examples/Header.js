import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {
    site: {
      info: { author, title },
    },
  } = useStaticQuery(graphql`
    {
      site {
        info: siteMetadata {
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
  `)
  return (
    <div>
      <h1>This is the heading of the page</h1>
      <h2>{author}</h2>
      <h2>{title}</h2>
    </div>
  )
}

export default Header
