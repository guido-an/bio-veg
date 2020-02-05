import React from 'react'
import { Link } from 'gatsby'
import logoFooter from '../images/bio-veg-logo.png'
const footer = () => (

  <section className='footer'>
    <img style={{ width: '160px' }} src={logoFooter} alt='logo-bio-veg' />
    <ul>
      <li><Link to='/'>HOME</Link></li>
      <li><Link to='/il-progetto'>IL PROGETTO</Link></li>
      <li><Link to='/paccasassi'>PACCASASSI</Link></li>
      <li><Link to='/contatti'>CONTATTI</Link></li>
    </ul>
    <a className='credits' target='_blank' href='https://www.vanillamarketing.it/'>Sito creato da Vanilla Marketing</a>
    <style jsx='true'>
      {`
       .footer {
           margin-top: 40px;
           text-align: center
       }
       .footer ul{
           display: flex;
           justify-content: center;
           position: relative;
           right: 20px
       }
       .footer ul li{
           list-style: none
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
    @media(min-width: 1200px){
       
    }
      `}
    </style>
  </section>

)

export default footer
