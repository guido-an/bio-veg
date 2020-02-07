import React from 'react'
import { Link } from 'gatsby'
import paccasassiPhoto from '../images/bioveg-paccasassi.jpg'

const servicesHome = () => (

  <section>
    <div className='service1'>
      <div className='service1left'>
        <img src={paccasassiPhoto} className='shadow' />
      </div>
      <div className='service1right'>
        <h2>il progetto</h2>
        <p>BioVeg Conserve ha l'obiettivo di mettere a sistema pratiche esistenti nel settore agricolo e delle tecnologie alimentari per la produzione e trasformazione del finocchio marino.</p>
        <Link style={{ textAlign: 'center' }} className='btn btn-green' to='/il-progetto'>IL PROGETTO</Link>
      </div>

    </div>
    <div className='service2'>

      <div className='service2right'>
        <h2>paccasassi</h2>
        <p>Semi impermeabili e pelle dura, capacità di adattamento e resilienza fanno sì che il finocchio di mare, che ha patria su scogli e litorali, non disdegni, all’occorrenza, di prendere dimora nell’entroterra colonizzando quelle che gli urbanisti chiamano emergenze antropiche.</p>
        <Link style={{ textAlign: 'center' }} className='btn btn-green' to='/paccasassi'>PACCASASSI</Link>
      </div>
      <div className='service2left'>
        <img src={paccasassiPhoto} className='shadow' />
      </div>

    </div>
    <style jsx='true'>
      {`
      .service2 {
         margin-top: 80px
      }
      .service1left img,
      .service2left img  {
          width: 100%;
          height: auto
      }
        .service1right,
        .service2right{
           padding: 4%;
        } 
        .page-link a{
           margin-top: 40px;
           
        } 
        .page-link a:hover{
          color: #23662e
        }
       @media(min-width: 1200px){
           .service1,
           .service2{
               display: flex;
               justify-content: space-evenly
           }
           .service1left img,
           .service2left img{
             width: 90%;
             margin: 4%
           }
           .service1right,
           .service2right{
              max-width: 40%;
           }
       }
      `}
    </style>
  </section>

)

export default servicesHome
