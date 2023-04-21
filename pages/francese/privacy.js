import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Qui sommes-nous', url: '/francese/chi_siamo' },
    { title: 'Où sommes-nous', url: '/francese/dove-siamo' },
    { title: 'Accueil', url: '/' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Vie privée"
                description="Tu as fait un rêve et tu veux le réaliser ? Et qui vas-tu appeler ? Les DreamBuster !!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />

            <Paragraph
                title="Vie privée"
                maxWidth='lg'
                sx={{ marginTop: "10px", marginBottom: "60px", textAlign: 'center', }}
            >
                <p style={{textAlign: "left"}}> 
                L'article 13 du GDPR, le règlement de l'UE sur la vie privée introduit en 2018, exige que la personne concernée soit informée de ses droits et facultés en matière de données personnelles par le responsable du traitement.<br /><br />
                    Les informations de confidentialité sont fournies, en principe, par écrit et de préférence sous forme électronique, même si d'autres moyens sont autorisés.<br /><br />


                    Voici ce qui ne peut pas manquer dans les informations sur le traitement des données personnelles:<br />
                    → L'identité et les coordonnées du responsable du traitement et, le cas échéant, de son représentant;<br />
                    → Les coordonnées du délégué à la protection des données, dans les cas où nous sommes mandatés;<br />
                    → Les finalités du traitement auxquelles les données personnelles sont destinées ainsi que la base juridique du traitement;<br />
                    → Les intérêts légitimes poursuivis par le responsable du traitement ou par des tiers;<br />
                    → Tout destinataire ou toute catégorie de destinataires des données personnelles;<br />
                    → Le cas échéant, l'intention du responsable du traitement de transférer des données à caractère personnel vers un pays tiers ou à une organisation internationale et l'existence ou l'absence d'une décision d'adéquation de la Commission ou, en cas de transfert, la référence à des garanties appropriées ou souhaitables et les moyens d'obtenir une copie de ces garanties ou où elles ont été mises à disposition.<br /><br />

                    Le contenu de la divulgation est énuméré de manière exhaustive dans les articles 13 et 14 du GDPR et est en partie plus large que le Code de confidentialité.<br />
                    En particulier, le titulaire doit toujours préciser les coordonnées du RPD-DPO (Data Protection Officer<br /> data protection officer), le cas échéant, la base légale du traitement, quel est son intérêt légitime si ce dernier constitue la base du traitement.<br /><br />

                    Le transfert éventuel de données personnelles vers des pays tiers et à travers quels instruments doit également être indiqué dans la politique de confidentialité.<br />
                    La communication des informations sur le traitement des données personnelles (ex. art. 13 du code de confidentialité) doit être fournie, <br /> dans le cas de données personnelles non collectées directement auprès de l'intéressé (art. 14 du règlement ), dans un délai maximum d'un mois à compter de la collecte,<br /> ou au moment de la communication des données à des tiers ou à l'intéressé.<br />
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
