import React from "react"
import { Link } from "gatsby"

const navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/blog/">Blog page</Link>
        </li>
        <li>
          <Link to="/product/">product page</Link>
        </li>
        <li>
          <Link to="/examples/">Examples page</Link>
        </li>
        <li>
          <Link to="/images/">Images page</Link>
        </li>
        <li>
          <Link to="/author/">authors page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default navbar
