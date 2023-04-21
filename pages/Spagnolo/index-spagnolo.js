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
        role: "DIRECTOR",
        description: "I love work hard",
        description1: "We need to belive in something to have hope... The Dreams!",
        imageUrl: "/images/alfonso.png",
        email: "alfonso123.grosso@gmail.it",
        phone: '555 555-555',
    },
    {
        name: "Vallentino Roso",
        role: "INGENIERO",
        description: "I love geometry",
        description1: "With geometry we can make the Impossible!!",
        imageUrl: "/images/vallentino.png",
        email: "vallentino688.roso@gmail.it",
        phone: '555 636 363',
    },

    {
        name: "Gianmarco Tocco",
        role: "ORGANIZADOR DE EVENTOS",
        description: "I like organize a lot a events",
        description1: "i know... i'm so good... i can do the impossibile!!!",
        imageUrl: "/images/tocco.jpg",
        email: "iotoccotutto1994@gmail.it",
        phone: '555 696 969',
    },
    {
        name: "Mattio Bellozesu",
        role: "OPERADOR SANITARIO",
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
        title: "El Bosque de Champiñones",
        category: "Paisaje de fantasía",
        description: "Uno de nuestros soñadores nos pidió que construyéramos un bosque encantado de setas gigantes, como amante de Minecraft, y su bioma favorito es precisamente este.",
        immagineUrl: "/images/foresta-di-funghi.jpg",
    },
    {
        title: "El nuevo Reino",
        category: "Época medieval",
        description: "Uno de nuestros soñadores nos pidió construir un enorme castillo donde podamos alojarnos y vivir una experiencia real como Rey.",
        immagineUrl: "/images/castello.jpg",
    },
    {
        title: "La caída del lado oscuro",
        category: "Paisaje de horror",
        description: "Uno de nuestros soñadores nos pidió que creáramos un paisaje escalofriante donde pudiéramos experimentar las emociones más extremas. El miedo más puro.",
        immagineUrl: "/images/horror.jpg",
    },

]


let trasporti = [
    {
        title: "Helicóptero",
        category: "70€ ida y vuelta",
        description: "Un medio eficaz y seguro para hacer un corto tramo de la costa a su sueño",
        immagineUrl: "/images/aereo-libellula.jpg",
    },
    {
        title: "Helicóptero turístico",
        category: "120€ ida y vuelta",
        description: "Un medio que te hará admirar el magnífico paisaje durante todo el viaje",
        immagineUrl: "/images/aereo-turistico.jpg",
    },
    {
        title: "Helicóptero militar",
        category: "200€ ida y vuelta",
        description: "Un medio seguro más allá de todos los límites que le permitirá relajarse sin preocupaciones",
        immagineUrl: "/images/aereo-militare.jpg"
    },

]


let liste = [
    { elemento: "época romana - 150€" },
    { elemento: "época victoriana - 170€" },
    { elemento: "Edad Media - 230€" },
    { elemento: "Edad Oscura - 250€" },
    { elemento: "época futurista - 300€" },
    { elemento: "época western - 140€" },
]

let liste2 = [
    { elemento: "escenografía de fantasía - 400€" },
    { elemento: "Escenografía de películas/series - 280€" },
    { elemento: "escenografía de terror - 300€" },
    { elemento: "Escenografía Crimen - 260€" },
    { elemento: "escenografía erótica - 696€" },
    { elemento: "Escenografía de videojuegos - 330€" },
]

let liste3 = [
    { elemento: "1 noche - 100€" },
    { elemento: "3 noches - 260€" },
    { elemento: "1 semana - 680€" },
    { elemento: "2 semanas - 1200€" },
    { elemento: "1 mes - 2400€" },
    { elemento: "6 meses - 6700€" },
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
                description="¿Tuviste un sueño y quieres hacerlo realidad? ¿A quién vas a llamar? ¡Los DreamBuster!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/islanublar.jpg"
                menu={menu}
            />


            <Products
                title="Los sueños"
                description="Estos son algunos de los sueños que hemos hecho realidad"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="Nuestros servicios de transporte"
                subtitle="Aquí está la lista de precios de transporte" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Paragraph title="Prezzi" sx={{ textAlign: 'center', width:'100%', p:0  }}>
                <Grid container
                    sx={{ width:'100%' }}
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

            <Team
                title="Contactos"
                description="El equipo que hará tus sueños realidad."
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
