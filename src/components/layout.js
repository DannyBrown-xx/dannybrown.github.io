import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {

  return (
    <div>
      <header>
        <Link location="http://google.com" >Google</Link>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
