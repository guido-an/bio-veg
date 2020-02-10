/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import CookieConsent from "react-cookie-consent";

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent
    location="bottom"
    buttonText="Ok!"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2D672E" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
>
    Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.  {" "}
    <Link style={{color: '#fff'}} to="/policy">Policy</Link>
</CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
