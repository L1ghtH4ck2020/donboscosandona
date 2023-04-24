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
    { title: 'Développeurs:' },
    { title: 'Bagnoli Filippo,' },
    { title: 'Valentina Segato,' },
    { title: 'Alessandro Shvets' },
]

// Il nostro team
let members = [
    {
        name: "Alfonso il Grosso",
        role: "DIRECTEUR",
        description: "I love work hard",
        description1: "We need to belive in something to have hope... The Dreams!",
        imageUrl: "/images/alfonso.png",
        email: "alfonso123.grosso@gmail.it",
        phone: '555 555-555',
    },
    {
        name: "Vallentino Roso",
        role: "INGÉNIEURS",
        description: "I love geometry",
        description1: "With geometry we can make the Impossible!!",
        imageUrl: "/images/vallentino.png",
        email: "vallentino688.roso@gmail.it",
        phone: '555 636 363',
    },

    {
        name: "Gianmarco Tocco",
        role: "ORGANISATEUR DE MANIFESTATIONS",
        description: "I like organize a lot a events",
        description1: "i know... i'm so good... i can do the impossibile!!!",
        imageUrl: "/images/tocco.jpg",
        email: "iotoccotutto1994@gmail.it",
        phone: '555 696 969',
    },
    {
        name: "Mattio Bellozesu",
        role: "PROFESSIONNEL DE LA SANTÉ",
        description: "i love help pipol",
        description1: "thanks to me people gonna be healthy!!!",
        imageUrl: "/images/mattio1.jpg",
        email: "bellozesumatt1888@gmail.it",
        phone: '555 935 016',
    },

]

let menu = [
    { title: 'Qui sommes-nous', url: '/francese/chi_siamo' },
    { title: 'Où sommes-nous', url: '/francese/dove-siamo' },
    { title: 'Vie privée', url: '/francese/privacy' },

]

let prodotti = [
    {
        title: "The mushroom forest",
        category: "Paysage fantastique",
        description: "Un de nos rêveurs nous a demandé de créer une forêt enchantée faite de champignons géants, car il adore Minecraft, et son biome préféré est celui-ci.",
        immagineUrl: "/images/foresta-di-funghi.jpg",
    },
    {
        title: "The new Kingdom",
        category: "Époque médiévale",
        description: "Un de nos rêveurs nous a demandé de construire un immense château où nous pourrions loger et vivre l'expérience d'un vrai roi.",
        immagineUrl: "/images/castello.jpg",
    },
    {
        title: "The fall of the Darkside",
        category: "Paesaggio horror",
        description: "Un de nos rêveurs nous a demandé de créer un paysage de frissons où nous pourrions ressentir les émotions les plus extrêmes. La peur la plus pure.",
        immagineUrl: "/images/horror.jpg",
    },

]


let trasporti = [
    {
        title: "Hélicoptère",
        category: "70€ aller-retour",
        description: "Un moyen efficace et sûr de faire un court trajet de la côte à votre rêve",
        immagineUrl: "/images/aereo-libellula.jpg",
    },
    {
        title: "Hélicoptère de tourisme",
        category: "120€ aller-retour",
        description: "Un moyen qui vous permettra d'admirer le magnifique paysage tout au long du voyage",
        immagineUrl: "/images/aereo-turistico.jpg",
    },
    {
        title: "Hélicoptère militaire",
        category: "200€ aller-retour",
        description: "Un moyen sûr au-delà de toutes les limites qui vous permettra de vous détendre sans soucis",
        immagineUrl: "/images/aereo-militare.jpg"
    },

]
let slides = [
    {
      titolo: "Venez découvrir quelques hébergements pour la nuit",
      descrizione: "Ils ont l'air petits mais sont très accueillants",
      immagine: "/images/caribi.jpg",
    },
    {
      titolo: "Voici des petits villages à visiter en famille",
      descrizione: "Profitez d'admirer les poissons juste à côté de vous",
      immagine: "/images/caraibi-2.jpg"
    },
    {
        titolo: "Et pour quelqu'un qui veut quelque chose de romantique...",
        descrizione: "Venez vous faire prendre en photo souvenir sur cet îlot",
        immagine: "/images/vivere-su-un-isola.jpg"
      },
  ];

let slides2 = [
    {
        titolo: "Voici un scénario Wester possible qui peut être personnalisé à volonté",
        descrizione: "Le personnel le construira et portera des vêtements et des utilisations pour rendre votre rêve complètement réel",
        immagine: "/images/western.jpg"
    },
    {
        titolo: "Un possible scénario spatial 100% personnalisable",
        descrizione: "Le personnel portera des costumes et des outils de changement de voix pour rendre votre expérience super spacieuse… même avec des blasters",
        immagine: "/images/spazio.jpg"
    },
    {
        titolo: "Voici un scénario de crime possible",
        descrizione: "Il deviendra un mélange d'intrigues et de mystères à résoudre pour faire de vous le détective le plus rusé",
        immagine: "/images/crime.jpg"
    }
  ]


let liste = [
    { elemento: "l'époque romaine - 150€" },
    { elemento: "époque victorienne - 170€" },
    { elemento: "Époque médiévale - 230€" },
    { elemento: "époque sombre - 250€" },
    { elemento: "époque futuriste - 300€" },
    { elemento: "époque western - 140€" },
]

let liste2 = [
    { elemento: "Paysage fantastique - 400€" },
    { elemento: "scénographie film/série -280€" },
    { elemento: "Paysage d'horreur - 300€" },
    { elemento: "scénographie du crime - 260€" },
    { elemento: "scénographie spatiale - 600€" },
    { elemento: "scénographie de jeu vidéo - 330€" },
]

let liste3 = [
    { elemento: "1 nuit - 100€" },
    { elemento: "3 nuits - 260€" },
    { elemento: "1 semaine - 680€" },
    { elemento: "2 semaines - 1200€" },
    { elemento: "1 conte - 2400€" },
    { elemento: "6 contes - 6700€" },
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
                description="Tu as fait un rêve et tu veux le réaliser ? Et qui vas-tu appeler ? Les DreamBuster !!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/islanublar.jpg"
                menu={menu}
            />


            <Products
                title="Les rêves"
                description="Voici quelques-uns des rêves que nous avons réalisés"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="Nos services de transport"
                subtitle="Voici la liste des prix des transportsi" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Carousel slides={slides2} />

            <Paragraph title="Prix" sx={{ textAlign: 'center', width: '100%', p: 0 }}>
                <Grid container
                    sx={{ width: '100%' }}
                >
                    <Grid item>
                        <Paragraph title="Époque" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste}
                            />
                        </Paragraph>
                    </Grid>

                    <Grid item>
                        <Paragraph title="Paysage" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste2}
                            />
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <Paragraph title="Logement" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste3}
                            />
                        </Paragraph>
                    </Grid>
                </Grid>
            </Paragraph>

            <Carousel slides={slides} />

            <Team
                title="Contacts"
                description="L'équipe qui réalisera vos rêves.."
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
                title1="À propos de nous"
                description1="Nous sommes une association qui capture les rêves des gens et les réalise !! Notre île est située en Espagne, plus précisément sur l'île d'Ons."
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
