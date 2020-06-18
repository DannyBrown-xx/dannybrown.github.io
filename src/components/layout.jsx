import React from "react"
import Header from './Header/Header';

const Layout = ({ location, title, children }) => {
  const links = [
    { name: 'About', onClick: () => {}, current: true },
    { name: 'Blog', onClick: () => {} },
    { name: 'Portfolio', onClick: () => {} },
    { name: 'CV', onClick: () => {} }
  ];

  return (
    <>
      <Header includeCTA={true} links={links} />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;
