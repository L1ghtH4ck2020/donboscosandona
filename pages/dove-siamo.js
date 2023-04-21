import Head from 'next/head'
import Products from '@/components/Products'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'
import Products from '/components/Products'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Chi siamo', url: 'chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Privacy', url: '/privacy' },
]

let prodotti = [
    {
        title: "Hotel 3 Stelle",
        category: "Lussuriosa Calda😒",
        description: "",
        immagineUrl: "/images/baita.png",
    },
    {
        title: "Hotel 5 Stelle",
        category: "Lussuria Buona😃",
        description: "",
        immagineUrl: "/images/hotel5telle.png",
    },
    {
        title: "Hotel 6 Stelle",
        category: "Pura Lussuria🤑",
        description: "",
        immagineUrl: "/images/hotel6telle.png",
    },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Dove siamo"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'left' }}
                maxWidth='lg'
                title="Dove siamo">
                <p style={{fontSize: '19px'}}>
                    Ons è un'isola spagnola appartenente al piccolo arcipelago galiziano delle Isole di Ons. Si situa all'entrata della Ria di Pontevedra e appartiene amministrativamente al municipio di Bueu, situato nella provincia di Pontevedra. Insieme ad altri piccoli arcipelaghi del nord della Spagna come l'arcipelago delle isole Cies o le isole di Sálvora e quella di Cortegada forma parte del parco nazionale delle Isole Atlantiche della Galizia.<br/>
                    La superficie totale dell'isola è di 4,25 km² e il suo punto più alto corrisponde alla cima del Alto do Cucorno a 128 metri di altezza. Malgrado alle sue piccole dimensioni, l'isola dispone di ben 16 fonti di acqua potabile che alimentano le riserve d'acqua dell'isola. Il clima è qualificato come mediterraneo con temperature medie che si aggirano attorno ai 14,2 °C e con precipitazioni dalle medie annuali relativamente elevate.<br />
                    La popolazione totale è sugli 81 abitanti. Malgrado i numeri odierni, la demografia dell'isola ha avuto variazioni irregolari durante il secolo scorso, arrivando ad avere 530 abitanti nel 1955 e passando ad averne solo 16 nel 1982. La popolazione si concentra principalmente sulla costa orientali dove i litorali si caratterizzano per essere litorali sabbiosi e di pendenze dolci mentre, quello occidentale e direttamente esposto all'oceano è più aspro e roccioso.<br />
                    Le sue spiagge sono cristalline e ci sono diversi percorsi che portano al faro o al Buraco do Inferno. L'isola ospita l'unico campeggio sostenibile della Galizia, con servizi di campeggio, noleggio di cabine e glamping.
                    La spiaggia di Melide si trova nel nord dell'isola. È stata una delle prime spiagge per nudisti della Galizia ed è raggiungibile attraverso un sentiero di due chilometri dal nucleo urbano dell'isola.
                </p>  
            </Paragraph>
            <Products
              products={prodotti}
              cardWidth={4}
            
            />
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
