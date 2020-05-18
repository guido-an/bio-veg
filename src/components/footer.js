import React from 'react'
import { Link } from 'gatsby'
import logoFooter from '../images/bio-veg-logo.png'
import subFooter from '../images/subfooter.jpg'

const footer = () => (
  <section className='footer'>
    <img style={{ width: '160px' }} src={logoFooter} alt='logo-bio-veg' />
    <div>
      <p className='psr-marche-text'>PROGETTO BIO VEG CONSERVE<br />
Attività realizzata con il contributo del PSR Marche 2014/2020
Misura 16.1.A.2 - Progetto ID 28913
      </p>
    </div>
    <ul>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/il-progetto'>IL PROGETTO</Link></li>
      <li><Link to='/paccasassi'>PACCASASSI</Link></li>
      <li><Link to='/gruppo-operativo'>GRUPPO OPERATIVO</Link></li>
      <li><Link to='/contatti'>CONTATTI</Link></li>
    </ul>
    <a className='credits' target='_blank' href='https://www.vanillamarketing.it/'>Sito creato da Vanilla Marketing</a>
    <div>
      <img className='responsive-img' src={subFooter} />
    </div>
    <style jsx='true'>
      {`
       .footer {
           margin-top: 40px;
           text-align: center;
       }
  
      .footer ul {
        position: relative;
        right: 15px
      }
       .footer ul li{
           list-style: none;
           
           margin-bottom: 10px
       }
       .footer ul li{
           list-style: none
       }
       .footer ul li a{
           text-decoration: none;
           font-size: 15px;
           color: #777;
           display: inline-block;
           margin: 0 10px
       }
       .footer ul li a:hover{
           color: #222
       }
   
   .credits {
       display: block;
       margin: 60px 0 20px;
       color: #777;
       text-decoration: none;
       font-size: 12px
   }
   .psr-marche-text {
     font-size: 14px;
     padding: 0 10px;
     margin-bottom: 40px
   }
    @media(min-width: 768px){
      .footer ul{
           display: flex;
           justify-content: center;
           position: relative;
           right: 20px
       }
       .psr-marche-text {
          width: 40%;
          margin: 0 auto;
          padding-bottom: 40px
      }
    }
      `}
    </style>
  </section>

)

export default footer
