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


const menu = [
    { title: 'Chi siamo', url: 'chi_siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Home', url: '/' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Privacy"
                description="Hai fatto un sogno e vorresti realizzarlo? E chi chiamerai? I DreamBuster!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />

            <Paragraph
                title="Privacy"
                maxWidth='lg'
                sx={{ marginTop: "10px", marginBottom: "60px", textAlign: 'center', }}
            >
                <p style={{ textAlign: "left" }}>
                    El artículo 13 del RGPD, el Reglamento de privacidad de la UE introducido en 2018, obliga a informar al interesado sobre sus derechos y opciones en relación con los datos personales por parte del responsable del tratamiento.
                    La política de privacidad se entregará, en principio, por escrito y preferiblemente en formato electrónico, aunque se permitan otros medios.
                    Esto es lo que no puede faltar en la política de tratamiento de datos personales:
                    la identidad y los datos de contacto del responsable del tratamiento y, en su caso, de su representante;
                    los datos de contacto del delegado de protección de datos, cuando se nos haya nombrado;
                    los fines del tratamiento a los que se destinan los datos personales y la base jurídica del tratamiento;
                    los intereses legítimos perseguidos por el responsable del tratamiento o por terceros;
                    los destinatarios o categorías de destinatarios de los datos personales, en su caso;
                    cuando proceda, la intención del responsable del tratamiento de transferir datos personales a un tercer país o a una organización internacional y la existencia o inexistencia de una decisión de adecuación de la Comisión o, en caso de transferencias, la referencia a las garantías adecuadas o adecuadas y los medios para obtener una copia de dichas garantías o el lugar donde se han puesto a disposición.
                    Los contenidos de la información se enumeran de forma exhaustiva en los artículos 13 y 14 del RGPD y, en parte, son más amplios que el Código de Privacidad.
                    En particular, el responsable del tratamiento deberá indicar en todo momento los datos de contacto del RPD-DPO (responsable de protección de datos), si los hubiere, el fundamento jurídico del tratamiento, cuál es su interés legítimo si este constituye el fundamento jurídico del tratamiento.
                    La política de privacidad también debe indicar si los datos personales se transfieren a terceros países y a través de qué medios
                    La comunicación de la información sobre el tratamiento de los datos personales (por ejemplo, artículo 13 del Código de privacidad) deberá facilitarse, en el caso de los datos personales no recogidos directamente del interesado (artículo 14 del Reglamento), en el plazo máximo de un mes a partir de la recogida o en el momento de la comunicación de los datos a terceros o al interesado.
                    Quien no divulgue esta información al usuario comete una infracción administrativa punible con sanciones muy severas.
                </p>
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
