import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Qui sommes-nous ?', url: 'chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Vie privée', url: '/privacy' },
]

let prodotti = [
    {
        title: "Hôtel 3 étoiles",
        category: "Luxuriante Chaleureuse😒",
        description: "",
        immagineUrl: "/images/baita.png",
    },
    {
        title: "Hôtel 5 étoiles",
        category: "Désir Bonne😃",
        description: "",
        immagineUrl: "/images/hotel5telle.png",
    },
    {
        title: "Hôtel 6 étoiles",
        category: "Pure Luxuria🤑",
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
                title="Où sommes-nous ?"
                description="Tu as fait un rêve et tu veux le réaliser ? Et qui vas-tu appeler ? Les DreamBuster !!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'left' }}
                maxWidth='lg'
                title="Où sommes-nous ?">
                <p style={{ fontSize: '19px' }}>
                    Ons est une île espagnole appartenant au petit archipel galicien des îles d'Ons. Elle est située à l'entrée de la Ria de Pontevedra et appartient administrativement à la municipalité de Bueu, située dans la province de Pontevedra. Avec d'autres petits archipels du nord de l'Espagne, comme l'archipel des îles Cies ou les îles de Sálvora et Cortegada, il fait partie du parc national des îles atlantiques de Galice<br/>
                    La superficie totale de l'île est de 4,25 km² et son point culminant correspond au sommet de l'Alto do Cucorno à 128 mètres d'altitude. Malgré sa petite taille, l'île dispose de 16 sources d'eau potable qui alimentent les réserves d'eau de l'île. Le climat est qualifié de méditerranéen avec des températures moyennes d'environ 14,2 °C et des précipitations annuelles moyennes relativement élevées<br/>
                    La population totale est de 81 personnes. Malgré les chiffres actuels, la démographie de l'île a connu des fluctuations erratiques au cours du siècle dernier, passant de 530 habitants en 1955 à seulement 16 en 1982. La population est principalement concentrée sur la côte est, où les rivages sont sablonneux et en pente douce, tandis que la côte ouest, directement orientée vers l'océan, est plus accidentée et rocheuse<br/>
                    Ses plages sont cristallines et plusieurs sentiers mènent au phare ou à Buraco do Inferno. L'île abrite le seul camping durable de Galice, avec des services de camping, de location de cabanes et de glamping.
                    La plage de Melide est située au nord de l'île. C'était l'une des premières plages nudistes de Galice et elle est accessible par un sentier de deux kilomètres depuis le centre-ville de l'île.
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
