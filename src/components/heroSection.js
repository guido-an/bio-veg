import React from 'react'
import { Link } from 'gatsby'

const Hero = () => (
  <section className='hero'>
    <div className='hero-wrapper'>
      <h1>
        lorem <span>ipsum</span> doloret
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Link className='btn' id='btn-hero' to='/paccasassi' style={{ margin: '25px 10px' }}>PACCASASSI</Link>
      <Link className='btn btn-green' to='/il-progetto' style={{ margin: '25px 10px' }}>IL PROGETTO</Link>
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
       
        #btn-hero{
          border: 2px solid #241f20;
          color: #241f20 !important;
          font-weight: 600
        }
       
        #btn-hero:hover{
          border: 2px solid #23662e;
          color: #23662e !important;
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
