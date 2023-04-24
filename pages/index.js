import Grid from '@mui/material/Grid'
import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'
import Team from '/components/Team'
import Maps from '/components/Maps'
import Paragraph from '/components/Paragraph'
import Carousel from '/components/Carousel'
import Footer from '/components/Footer'

import Lista from '/components/List.js'

import { getDatiArticoli } from '/lib/articoli'

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

let menu = [
    { title: 'Chi siamo', url: '/chi_siamo' },
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
    { elemento: "scenografia spaziale - 600€" },
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
let slides = [
    {
        titolo: "Vieni a scorpire alcuni alloggi per la notte",
        descrizione: "Sembrano piccoli ma sono molto accolglienti",
        immagine: "/images/caribi.jpg",
    },
    {
        titolo: "Ecco piccoli villagi da visitare con la famiglia",
        descrizione: "Divertiti ad ammirare i pesci proprio accanto a te",
        immagine: "/images/caraibi-2.jpg"
    },
    {
        titolo: "E per qualcuno che vuole qualcosa di romantico...",
        descrizione: "Vieni a farti fare una foto ricordo su quest'isoletta",
        immagine: "/images/vivere-su-un-isola.jpg"
    },
];

let slides2 = [
    {
        titolo: "Ecco un possibile scenario wester personalizzabile a piacere",
        descrizione: "Lo staf lo costruirà e indosserà abiti e usi per rendere del tutto reale il tuo sogno",
        immagine: "/images/western.jpg"
    },
    {
        titolo: "Un possibile scenario Spaziale personalizzabile al 100%",
        descrizione: "Lo staf indosserà costumi e stumenti per cambiare voce per rendere la tua esperienza spazialissima.. con anche i blaster",
        immagine: "/images/spazio.jpg"
    },
    {
        titolo: "Ecco un possibile scenario crime",
        descrizione: "Diventera un mix tra intrighi e misteri da risolvere per farti diventare il detecive più astuto",
        immagine: "/images/crime.jpg"
    }
]


let images = [
    { imageUrl: '/images/dreamIsland.png' },
]

const menuFooter = [
    { title: 'Chi siamo', url: '/chi_siamo' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    { title: 'Home', url: '/' }
]

const socials = [
    { title: 'Instagram', imageUrl: '', url: '' },
    { title: 'Tik Tok', imageUrl: '', url: '' },
    { title: 'Facebook', imageUrl: '', url: '' },
    { title: 'Telegram', imageUrl: '', url: '' },
    { title: 'Twitter', imageUrl: '', url: 'https://twitter.com/CampingOns' },
]

const menu2 = [
    { title: 'Sviluppatori:' },
    { title: 'Bagnoli Filippo,' },
    { title: 'Valentina Segato,' },
    { title: 'Alessandro Shvets' },
]

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
                subtitle="Ecco listino prezzi dei trasporti" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Carousel slides={slides2} />

            <Paragraph title="Prezzi" sx={{ textAlign: 'center', width: '100%', p: 0 }} xs={100} >
                <Grid container
                    sx={{ width: '100%' }}
                >
                    <Grid item>
                        <Paragraph title="Epoca" sx={{ textAlign: 'center' }}>
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
            {/* immagini*/}

            <Carousel slides={slides} />

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
            <Footer
                color="#00000F"
                opacitycolor="1"
                opacity={1}
                title1="About us"
                description1="Siamo un'associazione che acchiappa i sogni delle persone e li realizza!! La nostra isola si trova in Spagna, più precisamnete nell'isola di Ons."
                title2="Social"
                socials={socials}
                images={images}
                menu={menuFooter}
                menu2={menu2}
                copyright="Copyright (C) 2023 9dreams Agency."
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
