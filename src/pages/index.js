import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SEO from '../components/seo'
import ServicesHome from '../components/servicesHome'
import PartnersHome from '../components/partnersHome'
import ContactCta from '../components/contactCta'

const IndexPage = () => (
  <Layout>
    <SEO title='Bio Veg' />
    <Hero />
    <ServicesHome />
    <PartnersHome />
    <ContactCta />
  </Layout>
)

export default IndexPage
