import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'
import PartnersHome from '../components/partnersHome'

const Partners = () => (
  <Layout>
    <SEO title='Paccasassi' />
    <div className='title-section'>

      <h1>I NOSTRI PARTNERS</h1>
      <div className='divider' />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <div className='partners-page'>
        <PartnersHome />
      </div>
      <ContactCta />
    </div>
    <style jsx='true'>{`
        .partners-title{
            display: none
        }
        `}
    </style>
  </Layout>
)

export default Partners
