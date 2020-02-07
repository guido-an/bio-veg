import React from 'react'
import { Link } from 'gatsby'
import cameraCommercio from '../images/camera-di-commercio-ancona.png'
import rinci from '../images/rinci-logo.png'
import cia from '../images/cia-logo.png'
import gregori from '../images/olive-gregori-logo.png'
import paccasassi from '../images/paccasassi-del-conero.png'
import univpm from '../images/univpm.jpg'

const servicesHome = () => (

  <section className='partners-home'>
    <div className='partners-title'>
      <h2>i nostri partners</h2>
      <p>Questo è il team BioVeg Conserve</p>
    </div>
    <div className='logo-partners-home'>
      <Link to='/camera-di-commercio'><img src={cameraCommercio} alt='/camera-di-commercio-ancona-logo' /></Link>
      <Link to='/rinci'><img src={rinci} alt='/rinci-logo' /></Link>
      <Link to='/paccasassi-del-conero'><img src={paccasassi} alt='/paccasassi-del-conero-logo' /></Link>
      <Link to='/cia'> <img src={cia} alt='/cia-logo' /></Link>
      <Link to='/olive-gregori'><img src={gregori} alt='/olive-gregori-logo' /></Link>
      <Link to='/univpm'><img src={univpm} alt='/univpm-logo' /></Link>

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
            width: 100%
        }
    }
      `}
    </style>
  </section>

)

export default servicesHome
