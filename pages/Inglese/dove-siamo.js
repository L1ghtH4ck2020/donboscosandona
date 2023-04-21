import Head from 'next/head'
import Products from '@/components/Products'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Who we are', url: '/Inglese/chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Privacy', url: '/Inglese/privacy' },
]

let prodotti = [
    {
        title: "3 Star Hotel",
        category: "Lustful Hot😒",
        description: "",
        immagineUrl: "/images/baita.png",
    },
    {
        title: "5 Star Hotel",
        category: "Lust Good😃",
        description: "",
        immagineUrl: "/images/hotel5telle.png",
    },
    {
        title: "Hotel 6 Stars",
        category: "Pure Lust🤑",
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
                title="Where we are"
                description="You had a dream and you want to make it come true? And who will you call? The DreamBusters!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'left' }}
                maxWidth='lg'
                title="Where we are">
                <p style={{fontSize: '19px'}}>
                    Ons is a Spanish island belonging to the small Galician archipelago of the Ons Islands. It is located at the entrance to the Ria of Pontevedra and belongs administratively to the municipality of Bueu, located in the province of Pontevedra. Together with other small archipelagos in northern Spain such as the Cies Islands archipelago or the islands of Sálvora and that of Cortegada, it forms part of Galicia's Atlantic Islands National Park.<br/>
                    The total area of the island is 4.25 km² and its highest point corresponds to the summit of Alto do Cucorno at 128 meters high. Despite its small size, the island has as many as 16 sources of drinking water that supply the island's water supply. The climate qualifies as Mediterranean with average temperatures hovering around 14.2 °C and with precipitation from relatively high annual averages.<br />
                    The total population is on the 81 inhabitants. Despite today's numbers, the island's demographics have fluctuated erratically during the past century, rising to a population of 530 in 1955 and shifting to having only 16 in 1982. The population is mainly concentrated on the eastern coast where the shorelines are characterized as sandy and gently sloping while, the western and directly facing the ocean is more rugged and rocky.<br />
                    Its beaches are crystal clear and there are several paths leading to the lighthouse or Buraco do Inferno. The island is home to Galicia's only sustainable campground, with camping, cabin rental and glamping services.
                    Melide Beach is located in the north of the island. It was one of the first nudist beaches in Galicia and can be reached via a two-kilometer path from the island's urban core.
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

