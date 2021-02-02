import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img1.jpg"
import Img from "gatsby-image"

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      fixed: file(relativePath: { eq: "img1.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fluid: file(relativePath: { eq: "img2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      example: file(relativePath: { eq: "img3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="imgs">
      <article className="single-img">
        <h3>Basic image</h3>
        <img src={img} alt="img" width="100%"></img>
      </article>
      <article className="single-img">
        <h3>Fixed image</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-img">
        <h3>Fluid image</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />

        <Img fluid={data.example.childImageSharp.fluid} />
      </article>
    </div>
  )
}

export default Images
