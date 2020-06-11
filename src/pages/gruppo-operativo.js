import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactCta from '../components/contactCta'
import PartnersHome from '../components/partnersHome'

const Partners = () => (
  <Layout>
    <Seo title='Gruppo operativo | BioVeg Conserve' description="BioVeg Conserve è un'iniziativa che comprede aziende e vari enti con l'unico scopo di far emergere il finocchio di mare." />
    <div className='title-section'>

      <h1>GRUPPO OPERATIVO</h1>
      <div className='divider' />
      <p>Questo è il team BioVeg Conserve</p>

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
