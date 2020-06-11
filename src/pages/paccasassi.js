import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactCta from '../components/contactCta'
import pdf from '../images/presentazione-finocchio-marino.pdf'

const Paccasassi = () => (
  <Layout>
    <SEO title='Paccasassi del Conero tutti da scoprire' description='Da pianta con proprietà nutrizionali a ingrediente in grado di arricchire un piatto, i Paccasassi del Conero sono un tesoro da preservare.' />
    <div className='title-section'>
      <h1>PACCASASSI</h1>
      <div className='divider' />
      <p className='subtitle-page'>Si candida a ingrediente di grido per sofisticati piatti dal sapore salino</p>
    </div>
    <div>
      <p className='text-page'>William Shakespeare lo chiamava samphire (erba di San Pietro) e lo menziona nel Re Lear. Per Herman
Melville è Rock Fennel: in Moby Dick, tre marinai imbragati per un lavoro sul Pequod, gli ricordano
altrettante ceste da finocchio di mare a dondolare in alto sopra gli scogli.
Per i marchigiani è il paccasasso e si consuma sott&#39;olio. In Grecia è il crìtini o critamo (Κρίταμο) e si mangia
crudo in insalata.<br /><br /> Il suo nome scientifico è, invece, Crithmum maritimum, ovvero finocchio di mare.
Da sempre ha familiarità con gli uomini di mare perché cresce volentieri sulle coste, quasi tutte, e per le
virtù organolettiche che ne hanno fatto un potente antiscorbuto (di qui la sua presenza in grosse ceste
ciondolanti fuoribordo anche nella baleniera di Achab) e, ancora oggi, apprezzato diuretico, digestivo e anti
infiammatorio.<br /><br />
Semi impermeabili e pelle dura, capacità di adattamento e resilienza… fanno sì che il finocchio di mare, che
ha patria su scogli e litorali, non disdegni, all’occorrenza, di prendere dimora nell’entroterra colonizzando
quelle che gli urbanisti chiamano  emergenze antropiche (purché romantiche e fotogeniche): ruderi,
muretti, tetti di tegole, scarpate.<br /><br />
Oggi, nella nuova era dell’homo coquus, si candida a ingrediente di grido per sofisticati piatti dal sapore
salino e molta salubrità,  evocativi delle storie dei territori dove il finocchio di mare ha messo le sue
avventurose radici.
Il progetto BIO VEG CONSERVE ha al centro proprio la pianta erbacea perenne dai tanti nomi  e vuole
mettere a punto un sistema di coltivazione in linea con i principi dell’agricoltura biologica nel territorio
marchigiano, tutelandone al contempo la biodiversità. <br /><br />
Parallelamente il progetto ha anche l’obiettivo di portare all’applicazione di tecnologie di trasformazione
già in uso con altri prodotti ortofrutticoli per la produzione di nuove conserve e spezie biologiche e
funzionali a base di finocchio di mare e oliva della varietà Ascolana tenera.<br /><br />
Paccasassi e olive, due eccellenze ambasciatrici del territorio (e di tutta l’area macroregionale, potremmo
aggiungere), cariche di simboli e valori che sarà bello e buono scoprire e raccontare, e mettere a frutto.

        <br /><br />Per approfondire: <a
        style={{ color: '#222', textDecoration: 'none' }}
        rel='noopener noreferrer'
        href={pdf}
        target='_blank'
                                    > IL FINOCCHIO DI MARE:
ECOLOGIA, PROPRIETA’ ED
UTILIZZI TRADIZIONALI
                                    </a>

      </p>

      <ContactCta />
    </div>
  </Layout>
)

export default Paccasassi
