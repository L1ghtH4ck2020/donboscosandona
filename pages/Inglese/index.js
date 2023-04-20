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
        name: "Alfonso il Grosso",
        role: "DIRECTOR",
        description: "I love work hard",
        description1: "We need to belive in something to have hope... The Dreams!",
        imageUrl: "/images/alfonso.png",
        email: "alfonso123.grosso@gmail.it",
        phone: '555 555-555',
    },
    {
        name: "Vallentino Roso",
        role: "ENGINEER",
        description: "I love geometry",
        description1: "With geometry we can make the Impossible!!",
        imageUrl: "/images/vallentino.png",
        email: "vallentino688.roso@gmail.it",
        phone: '555 636 363',
    },

    {
        name: "Gianmarco Tocco",
        role: "EVENT ORGANIZER",
        description: "I like organize a lot a events",
        description1: "i know... i'm so good... i can do the impossibile!!!",
        imageUrl: "/images/tocco.jpg",
        email: "iotoccotutto1994@gmail.it",
        phone: '555 696 969',
    },
    {
        name: "Mattio Bellozesu",
        role: "HEALTHCARE OPERATOR",
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
    { title: 'who we are', url: '/chi_siamo' },
    { title: 'Contacts', url: '/contatti' },
    { title: 'Where we are', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
]

let prodotti = [
    {
        title: "The mushroom forest",
        category: "fantasy scenography",
        description: "One of our dreamers asked us to create an enchanted forest made of giant mushrooms, as he is a Minecraft lover, and this is his favorite biome..",
        immagineUrl: "/images/foresta-di-funghi.jpg",
    },
    {
        title: "The new Kingdom",
        category: "medieval era",
        description: "One of our dreamers asked us to build a huge castle where he could stay and live the experience of a true King.",
        immagineUrl: "/images/castello.jpg",
    },
    {
        title: "The fall of the Darkside",
        category: "horror scenography",
        description: "One of our dreamers asked us to create a creepy landscape where you could experience the most extreme of emotions. The purest fear.",
        immagineUrl: "/images/horror.jpg",
    },

]


let trasporti = [
    {
        title: "Helicopter",
        category: "70$ round trip",
        description: "An effective and safe way to make a short distance from the coast to your dream",
        immagineUrl: "/images/aereo-libellula.jpg",
    },
    {
        title: "Panoramic helicopter",
        category: "120$ round trip",
        description: "A vehicle that will allow you to admire the magnificent landscape throughout the journey",
        immagineUrl: "/images/aereo-turistico.jpg",
    },
    {
        title: "Military helicopter",
        category: "200$ round trip",
        description: "A safe vehicle beyond all limits that will allow you to relax without worries",
        immagineUrl: "/images/aereo-militare.jpg"
    },

]


let liste = [
    { elemento: "Roman era - 150$" },
    { elemento: "Victorian era - 170$" },
    { elemento: "medieval era - 230$" },
    { elemento: "dark era - 250$" },
    { elemento: "futuristic era - 300$" },
    { elemento: "western era - 140$" },
]

let liste2 = [
    { elemento: "fantasy scenography - 400$" },
    { elemento: "film/TV series scenography - 280$" },
    { elemento: "horror scenography - 300$" },
    { elemento: "crime scenography - 260$" },
    { elemento: "erotic scenography - 696$" },
    { elemento: "video game scenography - 330$" },
]

let liste3 = [
    { elemento: "1 night - 100$" },
    { elemento: "3 nights - 260$" },
    { elemento: "1 week - 680$" },
    { elemento: "2 weeks - 1200$" },
    { elemento: "1 month - 2400$" },
    { elemento: "6 months - 6700$" },
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
                description="Did you have a dream and want to make it come true? Who will you call? The DreamBusters!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/islanublar.jpg"
                menu={menu}
            />

            <Products
                title="Dreams"
                description="Here are some of the dreams made by us"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="Our transport services"
                subtitle="Here is the transport price list" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Paragraph title="prices" sx={{ textAlign: 'center' }}>
                <Grid container
                    sx={{ p: 3 }}
                >
                    <Grid item>
                        <Paragraph title="era" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste}
                            />
                        </Paragraph>
                    </Grid>

                    <Grid item>
                        <Paragraph title="landscape" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste2}
                            />
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <Paragraph title="accommodation" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste3}
                            />
                        </Paragraph>
                    </Grid>
                </Grid>
            </Paragraph>

            <Team
                title="Contacts"
                description="The team that will make your dreams come true.."
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
