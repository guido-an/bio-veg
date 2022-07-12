import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/heroSection'
import Seo from '../components/seo'
import ServicesHome from '../components/servicesHome'
import PartnersHome from '../components/partnersHome'
import ContactCta from '../components/contactCta'
import locandina from '../images/seminario-paccasassi.jpg'
import presentazioneGaleazzi from '../images/presentazione-galeazzi.pdf'
import presentazioneOrsini from '../images/risultati-conclusivi-orsini.pdf'


const IndexPage = () => (
  <Layout>
    <Seo
      title='Conserve Biologiche con finocchio marino | BioVeg Conserve'
      description="Diffondiamo l'utilizzo del finocchio marino del Conero attraverso la creazione di conserve biologiche e la sperimentazione di tecniche agricole."
    />
    <Hero />
    <div style={{ textAlign: 'center'}}>
      <p>Scopri le ultime presentazioni: <br/>
      <a
      style={{ display: 'block'}} 
        rel='noopener noreferrer'
        href={presentazioneGaleazzi}
        target='_blank'
      > Presentazione galeazzi</a>
      <a
        rel='noopener noreferrer'
        href={presentazioneOrsini}
        target='_blank'
      > Risultati conclusivi Orsini</a>
      {/* <a style={{display: 'block'}} href="presentazione-galeazzi.pdf" target="_blank"></a>
      <a href="risultati-conclusivi-orsini.pdf" target="_blank"></a> */}
      </p>
      {/* <div style={{
        textAlign: 'center',
        position: 'relative',
        bottom: '80px',
        margin: '0 auto',
        padding: '0 10px',
        maxWidth: '800px'
      }}
      >
      
        <img style={{ width: '100%'}} src={locandina} />a
      </div> */}
    </div>
    <ServicesHome />
    <PartnersHome />
    <ContactCta />
  </Layout>
)

export default IndexPage
