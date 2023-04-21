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


let menu = [
    { title: 'Home', url: '/' },
    { title: 'Contacts', url: '/Inglese/contatti' },
    { title: 'Where we are', url: '/Inglese/dove-siamo' },
    { title: 'Privacy', url: '/Inglese/privacy' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="who we are"
                description="Did you have a dream and want to make it come true? Who will you call? The DreamBusters!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph
                maxWidth='lg'
                title="who we are"
                subtitle="From the origins until today" >
                You are surely wondering who we are...<br /><br />

                Let me tell you how it all began.<br />
                10 years ago I had an idea that turned my life upside down I decided to start investing my money until I had no more space in the house to put it,
                i started studying economics and working part time as a waiter to start my dream,<br /> to be the richest person in the world. After I got some money, I used it for books and study courses;<br /> after a few years of hard work..<br /><br />
                He succeeded, I couldn't even believe it and so I decided to open businesses here and there to double my income,<br /> so I finally became the richest entrepreneur on the planet.<br />
                But after all that hard work I found myself with nothing left to do, until one day I had an idea,<br /> why not buy an island and make other people's dreams come true, I had made mine, but some people maybe they couldn't ..<br /><br />

                So I opened a company the dream corporation and hired some of the best engineers, artists, designers, stylists, and so on and so forth,<br />
                and some of my closest friends to manage the company, and since 2023 we are finally operational.<br /><br />

                I bought an agency along the Playa de Montalvo coast, so I decided to change the name of the company.<br />
                Suenos Locos S.A.<br />
                The company owns the park, located on the island of Ons, where all the craziest and most personal dreams of every dreamer in the world come true.<br /><br />

                So myself, Alfonso il Grosso, and my team will make your dreams come true.<br />
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
