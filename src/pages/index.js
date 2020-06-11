import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/heroSection'
import Seo from '../components/seo'
import ServicesHome from '../components/servicesHome'
import PartnersHome from '../components/partnersHome'
import ContactCta from '../components/contactCta'

const IndexPage = () => (
  <Layout>
    <Seo
      title='Conserve Biologiche con finocchio marino | BioVeg Conserve'
      description="Diffondiamo l'utilizzo del finocchio marino del Conero attraverso la creazione di conserve biologiche e la sperimentazione di tecniche agricole."
    />
    <Hero />
    <ServicesHome />
    <PartnersHome />
    <ContactCta />
  </Layout>
)

export default IndexPage
