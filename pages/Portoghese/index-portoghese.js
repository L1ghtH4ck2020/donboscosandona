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

// Il nostro team
let members = [
    {
        name: "Alfonso il Grosso",
        role: "DIRETOR",
        description: "I love work hard",
        description1: "We need to belive in something to have hope... The Dreams!",
        imageUrl: "/images/alfonso.png",
        email: "alfonso123.grosso@gmail.it",
        phone: '555 555-555',
    },
    {
        name: "Vallentino Roso",
        role: "ENGENHEIRO",
        description: "I love geometry",
        description1: "With geometry we can make the Impossible!!",
        imageUrl: "/images/vallentino.png",
        email: "vallentino688.roso@gmail.it",
        phone: '555 636 363',
    },

    {
        name: "Gianmarco Tocco",
        role: "ORGANIZADOR DE EVENTO",
        description: "I like organize a lot a events",
        description1: "i know... i'm so good... i can do the impossibile!!!",
        imageUrl: "/images/tocco.jpg",
        email: "iotoccotutto1994@gmail.it",
        phone: '555 696 969',
    },
    {
        name: "Mattio Bellozesu",
        role: "OPERADORA DE SAÚDE",
        description: "i love help pipol",
        description1: "thanks to me people gonna be healthy!!!",
        imageUrl: "/images/mattio1.jpg",
        email: "bellozesumatt1888@gmail.it",
        phone: '555 935 016',
    },

]

let menu = [
    { title: 'quem nós somos', url: '/Portoghese/chi_siamo' },
    { title: 'onde estamos', url: '/Portoghese/dove-siamo' },
    { title: 'Privacidade', url: '/Portoghese/privacy' },
]

let prodotti = [
    {
        title: "The mushroom forest",
        category: "paisagem de fantasia",
        description: "Um dos nossos sonhadores nos pediu para criar uma floresta encantada feita de cogumelos gigantes, pois ele é um amante do Minecraft, e este é o seu bioma favorito.",
        immagineUrl: "/images/foresta-di-funghi.jpg",
    },
    {
        title: "The new Kingdom",
        category: "era medieval",
        description: "Um dos nossos sonhadores pediu-nos para construir um enorme castelo onde ele pudesse ficar e viver a experiência de um verdadeiro Rei.",
        immagineUrl: "/images/castello.jpg",
    },
    {
        title: "The fall of the Darkside",
        category: "paisagem de terror",
        description: "Um de nossos sonhadores nos pediu para criar uma paisagem assustadora onde você pudesse experimentar as emoções mais extremas. O medo mais puro.",
        immagineUrl: "/images/horror.jpg",
    },

]


let trasporti = [
    {
        title: "Helicóptero",
        category: "devolução de 70€",
        description: "Uma forma eficaz e segura de percorrer uma curta distância da costa até ao seu sonho",
        immagineUrl: "/images/aereo-libellula.jpg",
    },
    {
        title: "Helicóptero turístico",
        category: "devolução de 120€",
        description: "Um veículo que lhe permitirá admirar a magnífica paisagem ao longo da viagem",
        immagineUrl: "/images/aereo-turistico.jpg",
    },
    {
        title: "helicóptero militar",
        category: "devolução de 200€",
        description: "Um veículo seguro além de todos os limites que lhe permitirá relaxar sem preocupações",
        immagineUrl: "/images/aereo-militare.jpg"
    },

]


let liste = [
    { elemento: "tempos romanos - 150€" },
    { elemento: "Idade vitoriana - 170€" },
    { elemento: "era medieval - 230€" },
    { elemento: "era negra - 250€" },
    { elemento: "era futurista - 300€" },
    { elemento: "era ocidental - 140€" },
]

let liste2 = [
    { elemento: "paisagem de fantasia - 400€" },
    { elemento: "cenografia de filme/série de TV - 280€" },
    { elemento: "paisagem de terror- 300€" },
    { elemento: "cenografia de crime - 260€" },
    { elemento: "cenografia espacial - 600€" },
    { elemento: "cenografia de videogame - 330€" },
]

let liste3 = [
    { elemento: "1 Noite - 100€" },
    { elemento: "3 noites - 260€" },
    { elemento: "1 semana - 680€" },
    { elemento: "2 semanas - 1200€" },
    { elemento: "1 mês - 2400€" },
    { elemento: "6 meses - 6700€" },
]

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
    { title: 'Desenvolvedores:' },
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
                description="Você teve um sonho e gostaria de realizá-lo? E para quem você vai ligar? Os Caça-Sonhos!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="/images/islanublar.jpg"
                menu={menu}
            />

            <Products
                title="Sonhos"
                description="Aqui estão alguns dos sonhos realizados por nós"
                cardWidth={4}
                products={prodotti}
            />

            {/* &nbsp; = spazio */}

            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="Nossos serviços de transporte"
                subtitle="Aqui está a lista de preços de transporte" />
            <Products
                cardWidth={4}
                products={trasporti}
            />

            <Paragraph title="Preços" sx={{ textAlign: 'center', width: '100%', p: 0 }}>
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
                        <Paragraph title="Paisagem" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste2}
                            />
                        </Paragraph>
                    </Grid>
                    <Grid item>
                        <Paragraph title="Alojamento" sx={{ textAlign: 'center' }}>
                            <Lista
                                lista={liste3}
                            />
                        </Paragraph>
                    </Grid>
                </Grid>
            </Paragraph>

            <Team
                title="Contatos"
                description="A equipe que vai realizar seus sonhos.."
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
                title1="Sobre nós"
                description1="Somos uma associação que captura os sonhos das pessoas e os torna realidade!! Nossa ilha está localizada na Espanha, mais especificamente na ilha de Ons."
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
