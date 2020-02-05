import React from 'react'
import { Link } from 'gatsby'
import cameraCommercio from '../images/camera-di-commercio-ancona.png'
import rinci from '../images/rinci-logo.png'
import cia from '../images/cia-logo.png'
import gregori from '../images/olive-gregori-logo.png'

const servicesHome = () => (

  <section className='partners-home'>
    <h2>i nostri partners</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perferendis</p>
    <div className='logo-partners-home'>
      <Link to='/partner-camera-di-commercio'><img src={cameraCommercio} alt='/camera-di-commercio-ancona-logo' /></Link>
      <Link to='/partner-rinci'><img src={rinci} alt='/rinci-logo' /></Link>
      <Link to='/partner-cia'> <img src={cia} alt='/cia-logo' /></Link>
      <Link to='/partner-olive-gregori'><img src={gregori} alt='/olive-gregori-logo' /></Link>
    </div>
    <style jsx='true'>
      {`
    .partners-home{
        margin: 4%;
        text-align: center;
        margin-top: 120px
    }
    @media(min-width: 1200px){
        .logo-partners-home{
           display: flex;
           jusify-content: space-evenly;
           margin-top: 80px
          
        }   
        .logo-partners-home img{
            width: 90%
        }
    }
      `}
    </style>
  </section>

)

export default servicesHome
