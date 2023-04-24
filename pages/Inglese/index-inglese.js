import Grid from '@mui/material/Grid'
import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Products from '/components/Products'
import Team from '/components/Team'
import Maps from '/components/Maps'
import Paragraph from '/components/Paragraph'
import Footer from '/components/Footer'

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
    { title: 'Developers:' },
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

let menu = [
    { title: 'who we are', url: '/Inglese/chi_siamo' },
    { title: 'Where we are', url: '/Inglese/dove-siamo' },
    { title: 'Privacy', url: '/Inglese/privacy' },
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
    { elemento: "spatial scenography - 600$" },
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
let slides = [
    {
        titolo: "Come and discover some lodgings for the night",
        descrizione: "They look small but are very welcoming",
        immagine: "/images/caribi.jpg",
    },
    {
        titolo: "Here are small villages to visit with the family",
        descrizione: "Enjoy admiring the fish right next to you",
        immagine: "/images/caraibi-2.jpg"
    },
    {
        titolo: "And for someone who wants something romantic...",
        descrizione: "Come and have a souvenir photo taken on this islet",
        immagine: "/images/vivere-su-un-isola.jpg"
    },
];

let slides2 = [
    {
        titolo: "Here is a possible wester scenario that can be customized as desired",
        descrizione: "The staff will build it and wear clothes and uses to make your dream completely real",
        immagine: "/images/western.jpg"
    },
    {
        titolo: "A possible 100% customizable Space scenario",
        descrizione: "The staff will be wearing costumes and voice changing tools to make your experience super-spacious… even with blasters",
        immagine: "/images/spazio.jpg"
    },
    {
        titolo: "Here is a possible crime scenario",
        descrizione: "It will become a mix of intrigue and mysteries to be solved to make you the most cunning detective",
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

            <Carousel slides={slides2} />

            <Paragraph title="Prices" sx={{ textAlign: 'center', width: '100%', p: 0 }}>
                <Grid container
                    sx={{ width: '100%' }}
                >
                    <Grid item>
                        <Paragraph title="Era" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste}
                            />
                        </Paragraph>
                    </Grid>

                    <Grid item>
                        <Paragraph title="Landscape" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste2}
                            />
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <Paragraph title="Accommodation" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste3}
                            />
                        </Paragraph>
                    </Grid>
                </Grid>
            </Paragraph>

            <Carousel slides={slides}/>

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

            <Footer color="#00000F"
                opacitycolor="1"
                opacity={1}
                title1="About us"
                description1="We are an association that catches people's dreams and makes them come true! Our island is located in Spain, more precisely on the island of Ons."
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
