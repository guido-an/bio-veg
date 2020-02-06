import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'
import pdf from '../images/il-progetto-bio-veg-conserve.pdf'

const Project = () => (
  <Layout>
    <SEO title='Bio Veg' />
    <div className='title-section'>
      <h1>IL PROGETTO BIO VEG CONSERVE</h1>
      <div className='divider' />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
    <div>
      <p className='text-page'>Il progetto &quot;Nuove conserve vegetali biologiche da varietà autoctone di finocchio marino coltivato
in biologico&quot; - BioVeg Conserve - è finanziato nell&#39;ambito del PSR Marche 2014-2020, Misura 16.1
Azione 2 con un budget complessivo di 358.110 euro.<br /><br />
Il finocchio marino è una pianta erbacea perenne con notevoli proprietà nutrizionali che cresce in
modo spontaneo nell&#39;area Mediterranea e, in particolare, in quella Adriatica ed è conosciuto con
diversi nomi locali, tra cui &quot;paccasassi&quot;, usato tradizionalmente nella zona del Conero.<br /><br />
Nonostante le sue proprietà nutrizionali siano note da secoli, come raccontato da numerose
testimonianze del passato, l&#39;utilizzo del finocchio marino è ancora estremamente limitato e, ad
oggi, non è stato ancora implementato in Italia un sistema di produzione agricola in linea con i
principi dell&#39;agricoltura biologica. Sono poco diffuse anche le coltivazioni di finocchio marino, che in
alcune aree, tra cui il Conero, è incluso tra le piante spontanee protette e, quindi, non utilizzabili.
Il progetto BioVeg Conserve ha l&#39;obiettivo di mettere a sistema pratiche esistenti nel settore
agricolo e delle tecnologie alimentari per la produzione e trasformazione del finocchio marino.
      <br /><br />Nell’ambito del progetto sarà sperimentata la semina di varietà autoctone di finocchio marino per
verificarne la capacità di adattamento e la resa produttiva e, in un secondo momento, saranno
condotte prove di fermentazione di germogli di finocchio marino e di olive della varietà Ascolana
tenera per la produzione di prototipi industriali di conserve fermentate biologiche.<br /><br />
Altre sperimentazioni saranno condotte selezionando alcuni prodotti orticoli sulla base delle
caratteristiche organolettiche e funzionali per giungere alla realizzazione di almeno un prototipo
industriale di salse biologiche e funzionali a base di finocchio marino e oliva della varietà Ascolana
tenera, mentre un processo analogo riguarderà 5-10 erbe officinali con l&#39;obiettivo di creare un
prototipo industriale di spezia disidratata biologica a base di finocchio marino.<br /><br />
La fase di sperimentazione sarà la base per le attività di divulgazione dei risultati a un pubblico più
ampio dei soli esperti. <br /><br />Attraverso alcuni incontri pubblici o rivolti ad operatori del settore
gastronomico e una pubblicazione che racconterà la storia dei pacassassi a un pubblico
particolare quale quello dei bambini, si cercherà di ampliare la conoscenza del finocchio di mare
quale alimento ricco di vitamina C e acidi grassi, inclusi quelli della serie Ω, e adatto a numerosi
abbinamenti di qualità.<br /><br />
Partner del progetto sono le aziende Rinci e Paccasassi del Conero, l&#39;Università Politecnica delle
Marche, la Camera di Commercio delle Marche e CIA Marche - Confederazione Italiana Agricoltori.

        <a
        style={{ display: 'block', marginTop: '20px', color: '#222', textDecoration: 'none' }}
        rel='noopener noreferrer'
        href={pdf}
        target='_blank'
      > Presentazione progetto BIO-VEG-CONSERVE
      </a>

      </p>

      <ContactCta />
    </div>
  </Layout>
)

export default Project
