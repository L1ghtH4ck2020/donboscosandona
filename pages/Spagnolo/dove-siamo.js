import Head from 'next/head'
import Products from '@/components/Products'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Quiénes somos', url: '/Spagnolo/chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Privacidad', url: '/Spagnolo/privacy' },
]

let prodotti = [
    {
        title: "Hotel 3 Estrellas",
        category: "Lujuriosa Caliente😒",
        description: "",
        immagineUrl: "/images/baita.png",
    },
    {
        title: "Hotel 5 Estrellas",
        category: "Lujuria Buena😃",
        description: "",
        immagineUrl: "/images/hotel5telle.png",
    },
    {
        title: "Hotel 6 Estrellas",
        category: "Pura lujuria🤑",
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
                title="¿Dónde estamos?"
                description="¿Tuviste un sueño y quieres hacerlo realidad? ¿A quién vas a llamar? ¡Los DreamBuster!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'left' }}
                maxWidth='lg'
                title="¿Dónde estamos?">
                <p style={{fontSize: '19px'}}>
                    Ons es una isla española perteneciente al pequeño archipiélago gallego de las Islas Ons. Se encuentra a la entrada de la Ría de Pontevedra y administrativamente pertenece al municipio de Bueu, situado en la provincia de Pontevedra. Junto con otros pequeños archipiélagos del norte de España como el archipiélago de las Islas Cíes o las islas de Sálvora y Cortegada, forma parte del Parque Nacional de las Islas Atlánticas de Galicia.<br/>
                    La superficie total de la isla es de 4,25 km² y su punto más alto corresponde a la cumbre del Alto do Cucorno, a 128 metros de altura. A pesar de su pequeño tamaño, la isla cuenta con 16 fuentes de agua potable que abastecen las reservas de agua de la isla. El clima se califica de mediterráneo, con temperaturas medias en torno a los 14,2 °C y precipitaciones medias anuales relativamente altas.<br />
                    La población total es de 81 personas. A pesar de las cifras actuales, la demografía de la isla ha fluctuado erráticamente durante el último siglo: llegó a tener 530 habitantes en 1955 y descendió a sólo 16 en 1982. La población se concentra principalmente en la costa oriental, donde las costas se caracterizan por ser arenosas y de pendiente suave, mientras que la costa occidental, directamente orientada hacia el océano, es más accidentada y rocosa.<br />
                    Sus playas son cristalinas y hay varios senderos que llevan al faro o al Buraco do Inferno. La isla alberga el único camping sostenible de Galicia, con servicios de acampada, alquiler de cabañas y glamping.
                    La playa de Melide se encuentra en el norte de la isla. Fue una de las primeras playas nudistas de Galicia y se accede a ella a través de un sendero de dos kilómetros desde el núcleo urbano de la isla.
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
