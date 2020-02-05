import React from 'react'
import { Link } from 'gatsby'

const Hero = () => (

  <section className='hero'>
    <div className='hero-wrapper'>
      <h1>
        lorem <span>ipsum</span> doloret
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Link className='hero-btn' id='btn1' to='/contatti'>PACCASASSI</Link>
      <Link className='hero-btn' id='btn2' to='/progetto'>IL PROGETTO</Link>
    </div>
    <style jsx='true'>
      {`
        .hero {
          text-align: center;
          height: 80vh;
          display: flex;
          justify-content: center;
        }
        .hero-wrapper{
          margin-top: 80px
        }
        .hero-wrapper h1 {
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          font-size: 32px;
          color: #241f20
        }
        .hero-wrapper span {
          color: #23662e;
        }
        .hero-wrapper p {
          font-weight: 500;
          font-size: 16px;
          position: relative;
          bottom: 0px;
          color: #777
        }
        .hero-btn{
          text-decoration: none;
          border-radius: 4px;
          padding: 10px 15px;
          display: inline-block;
          width: 120px;
          margin: 25px 10px;
          font-size: 12px;
          letter-spacing: 0.4px;
          font-weight: 500
        }
        #btn1{
          border: 2px solid #241f20;
          color: #241f20 !important;
          font-weight: 600
        }
        #btn2{
          background-color:#23662e;
          border: 2px solid #23662e;
          color: #fff;
        }
        #btn1:hover{
          border: 2px solid #23662e;
          color: #23662e !important;
        }
        
        #btn2:hover{
          background-color:#241f20;
          border: 2px solid #241f20;
        }
       
        @media (min-width: 1200px) {
          .hero-wrapper h1 {
            font-size: 52px;
          }
          .hero-wrapper p {
             font-size: 18px;
          }
        }
      `}
    </style>
  </section>

)

export default Hero
