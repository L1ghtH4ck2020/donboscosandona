import Head from 'next/head'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'
import Footer from '/components/Footer'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Home', url: '/' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
]

let images = [
    { imageUrl: '/images/dreamIsland.png' },
]

const menuFooter = [
    { title: 'Chi siamo', url: '/chi_siamo' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
    {title: 'Home', url:'/'}
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
                title="Chi siamo"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph
                maxWidth='lg'
                title="Chi siamo"
                subtitle="Dalle origini fino ad oggi" >
                Vi starete sicuramente chiedendo chi siamo...<br /><br />

                Lasciate che vi spieghi come tutto ha inizio.<br />
                10 anni fa mi venne un'idea che stravolse la mia vita ho deciso di cominciare a investire i miei soldi fino a non avere più spazio in casa dove metterli, <br />
                iniziai a studare economia e lavorare part time come cameriere per iniziare il mio sogno,<br /> essere la persona più ricca al mondo. Dopo essermi procurato dei soldi li utilizzai per libri e corsi di studio;<br /> dopo qualche anno di duro lavoro..<br /><br />
                Ci riuscì, non potevo nemmeno crederci e decisi quindi di aprire dei business qua e là per raddoppiare le entrate,<br /> così diventai finalmente l'imprenditore più ricco sul pianeta.<br />
                Ma dopo tutto quel duro lavoro mi sono ritrovato a non avere più niente da fare, finchè un giorno mi venne un idea,<br /> perchè non comprare un isola e realizzare i sogni degli altri, io avevo realizzato il mio, ma certe persona magari non riuscivano ..<br /><br />

                Perciò aprii un'azienda la dream corporation e assoldai alcuni tra i più bravi inegneri, artisti, designer, stilisti, e chi ne ha più ne metta,<br />
                e alcuni tra i miei amici più stretti per gestire l'azienda, e dal 2023 siamo finalmente operativi.<br /><br />

                Comprai un'agenzia lungo la costa Playa de Montalvo, decisi così di cambiare il nome dell'azienda.<br />
                La Suenos Locos S.A.<br />
                L'azienda è proprietaria del parco, situato nell'isola di Ons, dove si relizzano tutti i sogni più pazzi e personali di ogni sognatore del mondo.<br /><br />

                Io Alfonso il Grosso insieme al mio team realizzeremo i vostri sogni.<br />

            </Paragraph>

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
