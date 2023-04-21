import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Features from '/components/Features'
import Carousel from '/components/Carousel'
import Products from '/components/Products'
import Testimonials from '/components/Testimonials'
import Team from '/components/Team'
import Post from '/components/Post'
import Certifications from '/components/Certifications'
import Maps from '/components/Maps'
import Paragraph from '/components/Paragraph'

import Lista from '/components/List.js'

import { getDatiArticoli } from '/lib/articoli'
import MyDropdown from '/components/Dropdown'

// I punti di forza
const features = [
    {},
]


// slides per il carousel
let slides = [
    {},
]

// Il nostro team
let members = [
    {
        name: "Alfonso il Grosso",
        role: "DIRETTORE",
        description: "I love work hard",
        description1: "We need to belive in something to have hope... The Dreams!",
        imageUrl: "/images/alfonso.png",
        email: "alfonso123.grosso@gmail.it",
        phone: '555 555-555',
    },
    {
        name: "Vallentino Roso",
        role: "INGEGNERE",
        description: "I love geometry",
        description1: "With geometry we can make the Impossible!!",
        imageUrl: "/images/vallentino.png",
        email: "vallentino688.roso@gmail.it",
        phone: '555 636 363',
    },

    {
        name: "Gianmarco Tocco",
        role: "ORGANIZZATORE DEGLI EVENTI",
        description: "I like organize a lot a events",
        description1: "i know... i'm so good... i can do the impossibile!!!",
        imageUrl: "/images/tocco.jpg",
        email: "iotoccotutto1994@gmail.it",
        phone: '555 696 969',
    },
    {
        name: "Mattio Bellozesu",
        role: "OPERATORE SANITARIO",
        description: "i love help pipol",
        description1: "thanks to me people gonna be healthy!!!",
        imageUrl: "/images/mattio1.jpg",
        email: "bellozesumatt1888@gmail.it",
        phone: '555 935 016',
    },

]


const testimonials = [
    {},
]


let menu = [
    { title: 'Chi siamo', url: '/chi_siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },

]

let prodotti = [
    {
        title: "The mushroom forest",
        category: "Paesaggio fantasy",
        description: "Un nostro sognatore ci ha chiesto di realizzare una foresta incatanta fatta di funghi giganti, poichè amante di Minecraft, e il suo bioma preferito è proprio questo..",
        immagineUrl: "/images/foresta-di-funghi.jpg",
    },
    {
        title: "The new Kingdom",
        category: "Epoca medievale",
        description: "Un nostro sognatore ci ha chiesto di realizzare un enorme castello dove poter alloggiare e vivere un'esperienza da vero Re.",
        immagineUrl: "/images/castello.jpg",
    },
    {
        title: "The fall of the Darkside",
        category: "Paesaggio horror",
        description: "Un nostro sognatore ci ha chiesto di realizzare un paesaggio da brividi dove poter provare la più estrema delle emozioni. La paura più pura.",
        immagineUrl: "/images/horror.jpg",
    },

]


let trasporti = [
    {
        title: "Elicottero",
        category: "70€ andata e ritorno",
        description: "Un mezzo efficace e sicuro per fare un breve tratto dalla costa al tuo sogno",
        immagineUrl: "/images/aereo-libellula.jpg",
    },
    {
        title: "Elicottero turistico",
        category: "120€ andata e ritorno",
        description: "Un mezzo che ti farà ammirare il magnifico paesaggio durante tutto il viaggio",
        immagineUrl: "/images/aereo-turistico.jpg",
    },
    {
        title: "Elicottero militare",
        category: "200€ andata e ritorno",
        description: "Un mezzo sicuro oltre ogni limite che ti permetterà di rilassarti senza preoccupazioni",
        immagineUrl: "/images/aereo-militare.jpg"
    },

]


let liste = [
    { elemento: "epoca romana - 150€" },
    { elemento: "epoca vittoriana - 170€" },
    { elemento: "epoca medievale - 230€" },
    { elemento: "epoca oscura - 250€" },
    { elemento: "epoca futuristica - 300€" },
    { elemento: "epoca western - 140€" },
]

let liste2 = [
    { elemento: "scenografia fantasy - 400€" },
    { elemento: "scenografia film/serie tv - 280€" },
    { elemento: "scenografia horror - 300€" },
    { elemento: "scenografia crime - 260€" },
    { elemento: "scenografia erotica - 696€" },
    { elemento: "scenografia videogame - 330€" },
]

let liste3 = [
    { elemento: "1 notte - 100€" },
    { elemento: "3 notti - 260€" },
    { elemento: "1 settimana - 680€" },
    { elemento: "2 settimane - 1200€" },
    { elemento: "1 mese - 2400€" },
    { elemento: "6 mesi - 6700€" },
]


import styles from '/components/Dropdown.module.css'

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Dream island"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/islanublar.jpg"
                menu={menu}
            />


            <Products
                title="I sogni"
                description="Ecco alcuni dei sogni realizzati da noi"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="I nostri servizi di trasporto"
                subtitle="Ecco listino prezi dei trasporti" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Paragraph title="Prezzi" sx={{ textAlign: 'center', width: '100%', p: 0, }} >
                <Grid container
                    sx={{ width: '100%' }}
                >
                    <Grid item>
                        <Paragraph title="Epoca" sx={{ textAlign: 'center' }} xs={100}>
                            <Lista
                                lista={liste}
                            />
                        </Paragraph>
                    </Grid>

                    <Grid item>
                        <Paragraph title="Paesaggio" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste2}
                            />
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <Paragraph title="Alloggio" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste3}
                            />
                        </Paragraph>
                    </Grid>
                </Grid>
            </Paragraph>

            <Team
                title="Contatti"
                description="Il team che realizzerà i tuoi sogni.."
                members={members}
                cardWidth={3}
            />

            <Maps
                id="maps"
                maxWidth='100%'
                maxHeight='550px'
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23578.90449201762!2d-8.954811645063147!3d42.37741165896341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f44afad207c8b%3A0x299878e0962187e5!2sIsola%20di%20Ons!5e0!3m2!1sit!2sit!4v1681717640180!5m2!1sit!2sit"
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
