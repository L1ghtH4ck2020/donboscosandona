import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Qui sommes-nous', url: '/francese/chi_siamo' },
    { title: 'Accueil', url: '/' },
    { title: 'Vie privée', url: '/francese/privacy' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Où sommes-nous"
                description="Tu as fait un rêve et tu veux le réaliser ? Et qui vas-tu appeler ? Les DreamBuster !!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
           />
            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="Où sommes-nous"
                subtitle="Toutes les caractéristiques de notre magnifique île"
                >

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
