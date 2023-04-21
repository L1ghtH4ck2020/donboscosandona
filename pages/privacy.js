import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Chi siamo', url: 'chi_siamo' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Home', url: '/' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Privacy"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />

            <Paragraph
                title="Privacy"
                maxWidth='lg'
                sx={{ marginTop: "10px", marginBottom: "60px", textAlign: 'center', }}
            >
                <p style={{textAlign: "left"}}> 
                    L’articolo 13 del GDPR, il regolamento UE sulla privacy introdotto nel 2018, impone di informare l’interessato circa i diritti e le facoltà che gli sono proprie in relazione ai dati personali da parte del titolare del trattamento.<br /><br />
                    L’informativa privacy è consegnata, in linea di principio, per iscritto e preferibilmente in formato elettronico, anche se sono ammessi altri mezzi.<br /><br />


                    Ecco cos’è che non può mancare all’interno dell’informativa sul trattamento dei dati personali:<br />
                    → L’identità e i dati di contatto del titolare del trattamento e, ove applicabile, del suo rappresentante;<br />
                    → I dati di contatto del responsabile della protezione dei dati, nei casi in cui siamo nominato;<br />
                    → Le finalità del trattamento cui sono destinati i dati personali nonché la base giuridica del trattamento;<br />
                    → I legittimi interessi perseguiti dal titolare del trattamento o da terzi;<br />
                    → Gli eventuali destinatari o le eventuali categorie di destinatari dei dati personali;<br />
                    → Nel caso in cui sia pertinente, l’intenzione del titolare del trattamento di trasferire dati personali a un paese terzo o a un’organizzazione internazionale e l’esistenza o l’assenza di una decisione di adeguatezza della Commissione o, nel caso dei trasferimenti il riferimento alle garanzie appropriate o opportune e i mezzi per ottenere una copia di tali garanzie o il luogo dove sono state rese disponibili.<br /><br />

                    I contenuti dell’informativa sono elencati in modo tassativo negli articoli 13 e 14 del GDPR e in parte sono più ampi rispetto al Codice della Privacy.<br />
                    In particolare, il titolare dovrà sempre specificare i dati di contatto del RPD-DPO (Responsabile della protezione<br /> dei dati-Data Protection Officer), ove esistente, la base giuridica del trattamento, qual è il suo interesse legittimo se quest’ultimo costituisce la base giuridica del trattamento.<br /><br />

                    Nell’informativa privacy dovrà essere, inoltre, indicato l’eventuale trasferimento dei dati personali in Paesi terzi e attraverso quali strumenti.<br />
                    La comunicazione dell’informativa sul trattamento dei dati personali (ex. art. 13 del codice della privacy) dovrà essere fornita,<br /> nel caso di dati personali non raccolti direttamente presso l’interessato (art. 14 del regolamento), entro un massimo di un mese dalla raccolta,<br /> oppure al momento della comunicazione dei dati a terzi o all’interessato.<br />
                    Chi non dovesse provvedere a rendere note tali informazioni all’utente commette un illecito amministrativo punibile con sanzioni anche molto salate.
                </p>
            </Paragraph>

        </Layout >
    )
}

export async function getStaticProps() {
    const datiArticoli = getDatiArticoli()
    return {
        props: {
            datiArticoli,
        },
    }
}
