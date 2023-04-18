import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
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
        name: "",
        role: "",
        description: "",
        description1: "",
        imageUrl: "",
        email: "",
        phone: '',
    },

]


const testimonials = [
    {},
]


let menu = [
    { title: '', url: '/' },

]

let prodotti = [
    {
        title: "",
        category: "",
        description: "",
        immagineUrl: "",
    },

]


let trasporti = [
    {
        title: "elicottero",
        category: "",
        description: "",
        immagineUrl: "",
    }
]

let liste = [
    { elemento: "er" },
    { elemento: "er" },
    { elemento: "er" },
    { elemento: "er" },
    { elemento: "er" },

]

let liste2 = [
    { elemento: "scenografia fantasy" },

]


export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.5}
                title="Dream island"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/isolalh.png"
            />

            <Products
                title="I sogni"
                description="Ecco alcuni dei sogni realizzati da noi"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Products
                title="I nostri servizi di trasporto"
                description="Ecco listino prezi dei trasporti"
                cardWidth={4}
                products={trasporti}
            />

            <Paragraph title="Prezzi" sx={{textAlign: 'center'}}>
                <Grid container
                    sx={{ p: 3}}
                >
                    <Grid item>
                        <Paragraph title="epoca">
                            <Lista
                                lista={liste}
                            />
                        </Paragraph>
                    </Grid>

                    <Grid>
                        <Paragraph title="paesaggio">
                            <Lista
                                lista={liste2}
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
                maxWidth='100%'
                maxHeight='550px'
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23578.90449201762!2d-8.954811645063147!3d42.37741165896341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f44afad207c8b%3A0x299878e0962187e5!2sIsola%20di%20Ons!5e0!3m2!1sit!2sit!4v1681717640180!5m2!1sit!2sit"
            />

        </Layout>
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

