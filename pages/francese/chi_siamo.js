import Head from 'next/head'

import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Accueil', url: '/' },
    { title: 'Où sommes-nous', url: '/francese/dove-siamo' },
    { title: 'Vie privée', url: '/francese/privacy' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Qui sommes-nous"
                description="Tu as fait un rêve et tu veux le réaliser ? Et qui vas-tu appeler ? Les DreamBuster !!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph
                maxWidth='lg'
                title="Qui sommes-nous"
                subtitle="Dalle origini fino ad oggi" >
                Vous vous demandez sûrement qui nous sommes...<br /><br />

                Laissez-moi vous raconter comment tout a commencé.<br />
                Il y a 10 ans j'ai eu une idée qui a bouleversé ma vie j'ai décidé de commencer à investir mon argent jusqu'à ce que je n'ai plus de place dans la maison pour le mettre, <br />
                j'ai commencé à étudier l'économie et à travailler à temps partiel comme serveur pour commencer mon rêve,<br /> d'être la personne la plus riche du monde. Après avoir reçu un peu d'argent, je l'ai utilisé pour des livres et des cours d'études ;<br /> après quelques années de travail acharné..<br /><br />
                Il a réussi, je n'y croyais même pas et j'ai donc décidé d'ouvrir des entreprises ici et là pour doubler mes revenus,<br /> donc je suis finalement devenu l'entrepreneur le plus riche de la planète.<br />
                Mais après tout ce travail acharné, je me suis retrouvé avec rien à faire, jusqu'au jour où j'ai eu une idée,<br /> pourquoi ne pas acheter une île et réaliser les rêves des autres, j'avais réalisé le mien, mais certaines personnes peut-être qu'elles ne pouvait pas ..<br /><br />

                J'ai donc ouvert une entreprise, la société de rêve, et embauché certains des meilleurs ingénieurs, artistes, designers, stylistes, etc.,<br />
                et certains de mes amis les plus proches pour gérer l'entreprise, et depuis 2023 nous sommes enfin opérationnels.<br /><br />

                J'ai acheté une agence le long de la côte de Playa de Montalvo, j'ai donc décidé de changer le nom de l'entreprise.<br />
                Suenos Locos S.A.<br />
                L'entreprise est propriétaire du parc, situé sur l'île d'Ons, où se réalisent tous les rêves les plus fous et les plus personnels de chaque rêveur du monde.<br /><br />

                Alfonso il Grosso et mon équipe réaliseront vos rêves.<br />

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
