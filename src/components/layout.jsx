import React from "react"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <header>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout;
