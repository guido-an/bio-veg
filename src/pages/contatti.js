import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ContactCta from '../components/contactCta'
import phone from '../images/phone.png'
import email from '../images/email.png'

const Contact = () => (
  <Layout>
    <Seo title='Contatti | BioVeg Conserve' description="Potete contattarci all'e-mail: info@rinci.it o in alternativa al numero di telefono 071 7821358" />
    <div className='title-section'>
      <h1>CONTATTI</h1>
      <div className='divider' />
      <p>Per saperne di più mettiti in contatto con noi.</p>
    </div>

    <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', position: 'relative', bottom: '80px' }}>
      <div>
        <img src={email} style={{ width: '32px', position: 'relative', top: '10px' }} />
        <p><strong style={{ color: '#222' }}>EMAIL</strong></p>
        <a style={{ color: '#777', textDecoration: 'none' }} href='mailto:info@rinci.it'>info@rinci.it</a>
      </div>
      <div>
            <img src={phone} style={{ width: '32px', position: 'relative', top: '10px' }} />
            <p><strong style={{ color: '#222' }}>TELEFONO</strong></p>
            <a style={{ color: '#777', textDecoration: 'none' }} href='tel:+390717821358'>071 7821358</a>
          </div>
    </div>
    <ContactCta />
  </Layout>
)

export default Contact
