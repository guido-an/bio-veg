import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import ServicesHome from '../components/servicesHome'

const IndexPage = () => (
  <Layout>
    <SEO title='Bio Veg' />
    <Hero />
    <ServicesHome />
  </Layout>
)

export default IndexPage
