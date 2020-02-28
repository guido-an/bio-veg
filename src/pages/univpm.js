import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'

const Univpm = () => (
  <Layout>
    <SEO title='Università Politecnica Delle Marche' />
    <div className='title-section'>
      <h1>UNIVERSITÀ POLITECNICA DELLE MARCHE
      </h1>
    </div>
    <div>
      <p className='text-page'>
      L’Università Politecnica delle Marche (UNIVPM) è un ateneo a vocazione prevalentemente tecnico-scientifica che ha come obiettivo primario la ricerca scientifica e la didattica; l’ateneo persegue altresì una politica di collegamento con il territorio di riferimento contribuendo allo sviluppo sociale, culturale ed economico della società mediante azioni di trasferimento tecnologico e trasferimento di sapere.<br/><br/> Il Dipartimento di Scienze Agrarie Alimentari e Ambientali (D3A) dell’Università Politecnica delle Marche è un dipartimento multidisciplinare che svolge ricerche scientifiche, finanziate sia da enti pubblici sia privati, in diverse aree di ricerca, tra cui l’agronomia, la biologia vegetale, la microbiologia alimentare, industriale e ambientale, l’economia agraria, le tecnologie alimentari, ecc.<br/><br/> Il D3A coordina, tra gli altri, il Corso di laurea in "Scienze e Tecnologie Alimentari" e il Corso di laurea in lingua inglese "Food And Beverages: Innovation And Management" (FABIAM), nonché un Dottorato di ricerca in Scienze Agrarie, Alimentari ed Ambientali.<br/><br/>
L'eccellenza dell'attività di ricerca dei Ricercatori afferenti al D3A che partecipano al Progetto è documentata da oltre 300 pubblicazioni indicizzate (ISI Web of Science) e da 1 brevetto depositato. Relativamente all’esperienza pregressa sui temi specifici del G.O., i Ricercatori del D3A coinvolti nel Progetto vantano una pluriennale esperienza di ricerca sui seguenti temi:
<br/><br/>(i) raccolta, identificazione, caratterizzazione e conservazione di germoplasma di varietà locali/adriatiche di Crithmum maritimum (Dott.ssa Silvia Zitti)
<br/><br/>(ii) valutazione dell’effetto di pratiche agronomiche a basso impatto ambientale sulla produttività di sistemi colturali erbacei diffusi in ambito Mediterraneo (Dott. Roberto Orsini)
<br/><br/>(iii) studio del microbiota di alimenti di origine vegetale, anche ai fini della selezione di colture starter per la ottimizzazione della qualità e della sicurezza dei fermentati (Prof. Lucia Aquilanti, Prof. Andrea Osimani);
<br/><br/>(iv) ottimizzazione di parametri di processo nelle trasformazioni alimentari e analisi chimiche e compositive sui prodotti (Prof. Massimo Mozzon)
<br/><br/>(v) analisi sul consumatore di prodotti agro-alimentari (Prof. Raffaele Zanoli).
<br />   <br /><br /><strong className='title-section-text'>attività nel progetto</strong>
        <br />
        <br />Il Dipartimento di Scienze Agrarie, Alimentari e Ambientali dell'Università Politecnica delle Marche affiancherà le imprese partner del progetto nelle attività di sperimentazione, coltivazione e trasformazione del finocchio marino, delle olive tipo Ascolana tenera e dei prodotti orticoli per la produzione di nuovi prototipi di conserve, salse e spezie disidratate biologiche. 
        <br/><br/><Link to="/il-progetto" style={{textDecoration: 'none', color: '#777', fontWeight: '600'}}>> IL PROGETTO</Link>
      </p>
      <ContactCta />
    </div>
  </Layout>
)

export default Univpm
