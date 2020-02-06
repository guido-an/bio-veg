import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'

const Rinci = () => (
  <Layout>
    <SEO title='Rinci' />
    <div className='title-section'>
      <h1>RINCI
      </h1>
    </div>
    <div>
      <p className='text-page'>
      Rinci è un’azienda artigianale marchigiana che nasce nel 2013 grazie all’intraprendenza di 3 giovani
marchigiani, da sempre operanti nel settore alimentare, che decidono di mettere in campo la loro passione,
competenza e amore per il proprio territorio, al fine di proporre creazioni gastronomiche di altissima
qualità.<br /><br />
L’azienda, certificata Biologica, è specializzata nella produzione di salse tradizionali (salse e composte di
frutta BIO) e conserve a base di finocchio marino (Crithmum maritimum), meglio conosciuto nella zona di
Ancona come Paccasassi del Conero. La trasformazione dei Paccasassi rappresenta il core business
aziendale: è proprio su questo prodotto tipico del territorio che Rinci ha scommesso, diventando di fatto
leader in Italia nella trasformazione.<br /><br />
L’obbiettivo dell’azienda è regalare nuovi gusti ed esperienze sensoriali uniche, reinterpretando i sapori
della tradizione con sapienza e originalità, a partire da ingredienti semplici e sani. La creazione di prodotti
ricercati e dal sapore autentico passa dall’accurata selezione manuale delle materie prime, coltivate nel
rispetto dell’ambiente, e dalla professionalità con cui viene messa a punto ogni fase della loro lavorazione.
Per questo vengono sempre scelti ingredienti controllati, frutto della conoscenza e del rispetto verso il
territorio, trasformati con sapiente artigianalità.<br /><br /> Ciascuna delle preparazioni aziendali nasce da uno studio
approfondito condotto sulle singole materie prime e dall&#39;applicazione di conoscenze scientifico-
tecnologiche a metodi di lavorazione di tipo artigianale. Inoltre è realizzata una costante attività di ricerca
tesa a sperimentare nuovi processi e ricette originali.<br /><br />
Tradizione e innovazione sono, quindi, le due direttrici lungo le quali si sviluppa, si amplia e si rinnova
l’offerta dell’azienda.
      </p>
      <ContactCta />
    </div>
  </Layout>
)

export default Rinci
