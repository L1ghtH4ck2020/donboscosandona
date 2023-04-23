import Head from 'next/head'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Footer from '/components/Footer'

import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Home', url: '/Spagnolo/index-spagnolo' },
    { title: '¿Dónde estamos?', url: '/Spagnolo/dove-siamo' },
    { title: 'Privacidad', url: '/Spagnolo/privacy' },
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
    { title: 'Desarrolladores:' },
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
                title="Quiénes somos?"
                description="¿Tuviste un sueño y quieres hacerlo realidad? ¿A quién vas a llamar? ¡Los DreamBuster!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph
                maxWidth='lg'
                title="Quiénes somos?"
                subtitle="Desde los orígenes hasta la actualidad" >
                Seguramente se estarán preguntando quiénes somos...<br /><br />

                Déjenme explicarles cómo comienza todo.<br />
                Hace 10 años, tuve una idea que cambió mi vida. Decidí empezar a invertir mi dinero hasta que no tuviera espacio en la casa para ponerlo.<br />
                empecé a estudiar economía y a trabajar a tiempo parcial como camarero para comenzar mi sueño,<br /> ser la persona más rica del mundo. Después de conseguir algo de dinero, lo utilicé para libros y cursos de estudio;<br /> después de unos años de duro trabajo..<br /><br />
                Lo conseguí, no me lo podía ni creer, así que decidí abrir negocios aquí y allá para duplicar mis ingresos,<br /> convirtiéndome así por fin en el empresario más rico del planeta.<br />
                Pero después de todo ese duro trabajo, me encontré sin nada que hacer, hasta que un día tuve una idea,<br /> ¿por qué no comprar una isla y hacer realidad los sueños de otras personas, yo había realizado el mío, pero puede que algunas personas no..<br /><br />

                Así que abrí una empresa llamada Dream Corporation y contraté a algunos de los mejores ingenieros, artistas, diseñadores, estilistas, de todo
                y algunos de mis amigos más cercanos para dirigir la empresa, y en 2023 por fin estamos en marcha.<br /><br />

                Compré una agencia en la costa de Playa de Montalvo, así que decidí cambiar el nombre de la empresa.<br />
                La Suenos Locos S.A.<br />
                La empresa es propietaria del parque, situado en la isla de Ons, donde tienen lugar todas las peticiones de los soñadores más locos y personales del mundo.<br /><br />

                Yo Alfonso il Grosso junto con mi equipo haremos tus sueños realidad.<br />
            </Paragraph>

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
