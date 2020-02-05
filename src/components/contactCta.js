import React from 'react'
import { Link } from 'gatsby'

const contactCta = () => (

  <section className='contact-cta'>
    <div>
      <h2>Ne vuoi sapere di più su bio veg?</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div>
      <Link style={{ textAlign: 'center' }} className='btn btn-cta' to='/contatti'>CONTATTI</Link>
    </div>
    <style jsx='true'>
      {`

      .contact-cta{
        margin-top: 180px;
        background-color: #23662e;
        color: #fff;
        text-align: center;
        padding: 60px 4% 120px
      }
      
      .contact-cta p {
        color: #fff !important
      }
      .btn-cta{
          border: 2px solid #fff;
          color: #fff !important;
          font-weight: 600
        }
        .btn-cta:hover{
          border: 2px solid #fff;
          background-color: #fff !important;
          color: #222 !important
        }
        .contact-cta p {
        font-weight: 300
        }
   
    @media(min-width: 1200px){
      .contact-cta{
        display:flex;
        justify-content: space-evenly;
        text-align: left
      }
      .contact-cta h2{
           font-size: 32px
        }
        .btn-cta{
          position: relative;
          top: 20px
        }
        .contact-cta p {
          position: relative;
          bottom: 10px;
        }
    }
      `}
    </style>
  </section>

)

export default contactCta
