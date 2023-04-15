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
import Certifications from '@/components/Certifications'
import Maps from '/components/Maps'
import Paragraph from 'components/Paragraph'

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
    {},
]


const testimonials = [
    {},
]


let menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    { title: 'Trasparenza', url: '/trasparenza' },
]



export default function Home({ datiArticoli }) {
    return (
        
        <Layout>
            <LandingHero
                opacity={0.5}
                title="Dream island"
                description="hai fatto un sogno e vorresti realizzarlo? e chi chiamerai? i dreambuster"
                buttonUrl=''
                buttonText=""
                imageUrl=""
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