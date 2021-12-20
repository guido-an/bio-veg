import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/heroSection'
import Seo from '../components/seo'
import ServicesHome from '../components/servicesHome'
import PartnersHome from '../components/partnersHome'
import ContactCta from '../components/contactCta'
// import img from '../images/seminario.jpg'
import img2 from '../images/seminario-2.jpg'


const IndexPage = () => (
  <Layout>
    <Seo
      title='Conserve Biologiche con finocchio marino | BioVeg Conserve'
      description="Diffondiamo l'utilizzo del finocchio marino del Conero attraverso la creazione di conserve biologiche e la sperimentazione di tecniche agricole."
    />
    <Hero />
    {/* <div>
      <div style={{
        textAlign: 'center',
        position: 'relative',
        bottom: '80px'
      }}
      >
        <p><strong>"PACCASASSI: LE NUOVE CONSERVE BIO" - SEMINARIO ONLINE IL 18 DICEMBRE 2020</strong></p>
        <p>Per partecipare occorre collegarsi alla piattaforma Zoom a questo <a href='https://zoom.us/j/93004939829'>link</a></p>
        <img src={img} />
      </div>
    </div> */}
    <div>
      <div style={{
        textAlign: 'center',
        position: 'relative',
        bottom: '80px',
        margin: '0 auto',
        padding: '0 10px',
        maxWidth: '800px'
      }}
      >
        <p><strong>"PACCASASSI: LE NUOVE CONSERVE BIO"</strong></p>
        <p>Mercoledì 22 dicembre a partire dalle ore 16.00 si terrà un seminario di aggiornamento sui risultati del progetto BioVeg e sulle più recenti novità in materia di conserve biologiche prodotte con i paccasassi. Per partecipare basta collegarsi alla pagina <a href='https://us06web.zoom.us/j/85769224063'>https://us06web.zoom.us/j/85769224063</a></p>
        <img style={{ width: '100%'}}src={img2} />
      </div>
    </div>
    <ServicesHome />
    <PartnersHome />
    <ContactCta />
  </Layout>
)

export default IndexPage
