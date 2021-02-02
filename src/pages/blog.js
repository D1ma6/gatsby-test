import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <h1 className={styles.h1}>This is the blog page</h1>
      <Link to="/">Home page</Link>
    </Layout>
  )
}

export default blog
