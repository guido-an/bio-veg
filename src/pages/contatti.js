import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'
import phone from '../images/phone.png'
import email from '../images/email.png'

const Contact = () => (
  <Layout>
    <SEO title='Contatti Bio Veg' />
    <div className='title-section'>
      <h1>CONTATTI</h1>
      <div className='divider' />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
   
<div style={{textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', position: 'relative', bottom: '80px'}}>
      <div>
         <img src={email} style={{width: '32px', position: 'relative', top: '10px'}} />
         <p><strong style={{color: '#222'}}>EMAIL</strong></p>
         <a style={{color: '#777', textDecoration: 'none'}} href='mailto:info@rinci.it'>info@rinci.it</a>
    </div>
    <div>
         <img src={phone} style={{width: '32px', position: 'relative', top: '10px'}} />
         <p><strong style={{color: '#222'}}>TELEFONO</strong></p>
         <a style={{color: '#777', textDecoration: 'none'}} href='tel:+390717821358'>071 7821358</a>
    </div>
</div>
      <ContactCta />
  </Layout>
)

export default Contact
