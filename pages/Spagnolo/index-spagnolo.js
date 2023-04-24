import Grid from '@mui/material/Grid'
import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'
import Team from '/components/Team'
import Maps from '/components/Maps'
import Paragraph from '/components/Paragraph'
import Footer from '/components/Footer'
import Carousel from '/components/Carousel'

import Lista from '/components/List.js'

import { getDatiArticoli } from '/lib/articoli'

let images = [
    { imageUrl: '/images/dreamIsland.png' },
]


const socials = [
    { title: 'Instagram', imageUrl: '', url: '' },
    { title: 'Tik Tok', imageUrl: '', url: '' },
    { title: 'Facebook', imageUrl: '', url: '' },
    { title: 'Telegram', imageUrl: '', url: '' },
    { title: 'Twitter', imageUrl: '', url: 'https://twitter.com/CampingOns' },
]

const menu2 = [
    { title: 'Desarrolladores:' },
    { title: 'Bagnoli Filippo,' },
    { title: 'Valentina Segato,' },
    { title: 'Alessandro Shvets' },
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


let menu = [
    { title: 'Quiénes somos', url: '/Spagnolo/chi_siamo' },
    { title: '¿Dónde estamos?', url: '/Spagnolo/dove-siamo' },
    { title: 'Privacidad', url: '/Spagnolo/privacy' },

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
    { elemento: "Escenografía de fantasía - 400€" },
    { elemento: "Escenografía de películas/series tv - 280€" },
    { elemento: "Escenografía de terror - 300€" },
    { elemento: "Escenografía Crimen - 260€" },
    { elemento: "Escenografía espacial - 600€" },
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

let slides = [
    {
        titolo: "Ven a escorpitar algunos alojamientos para la noche",
        descrizione: "Parecen pequeños, pero son muy acogedores.",
        immagine: "/images/caribi.jpg",
    },
    {
        titolo: "Aquí hay pequeños pueblos para visitar con la familia",
        descrizione: "Diviértete viendo los peces a tu lado",
        immagine: "/images/caraibi-2.jpg"
    },
    {
        titolo: "Y para alguien que quiere algo romántico...",
        descrizione: "Ven a hacerte una foto recuerdo de esta pequeña isla.",
        immagine: "/images/vivere-su-un-isola.jpg"
    },
];

let slides2 = [
    {
        titolo: "Aquí hay un posible escenario wester personalizable a gusto",
        descrizione: "El personal lo construirá y usará ropa y ropa para hacer tu sueño realidad.",
        immagine: "/images/western.jpg"
    },
    {
        titolo: "Un posible escenario espacial 100% personalizable",
        descrizione: "El personal usará disfraces y trajes para cambiar la voz para hacer que tu experiencia sea muy espacial.. incluso con blasters",
        immagine: "/images/spazio.jpg"
    },
    {
        titolo: "Aquí hay un posible escenario de crimen",
        descrizione: "Conviértete en una mezcla de intrigas y misterios que resolver para convertirte en el detective más astuto",
        immagine: "/images/crime.jpg"
    }
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

            <Carousel slides={slides2} />

            <Paragraph title="Prezzi" sx={{ textAlign: 'center' }}>
                <Grid container
                    sx={{ p: 3 }}
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

            <Carousel slides={slides} />

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
            <Footer color="#00000F"
                opacitycolor="1"
                opacity={1}
                title1="Sobre nosotros"
                description1="Somos una asociación que captura los sueños de la gente y los hace realidad!! Nuestra isla se encuentra en España, más precisamente en la isla de Ons."
                title2="Social"
                socials={socials}
                images={images}
                menu={menu}
                menu2={menu2}
                copyright="Copyright (C) 2023 9dreams Agency." />

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
