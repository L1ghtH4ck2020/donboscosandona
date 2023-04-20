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
    { title: 'who we are', url: '/chi_siamo' },
    { title: 'Contacts', url: '/contatti' },
    { title: 'Where we are', url: '/dove-siamo' },
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
                description="Did you have a dream and want to make it come true? Who will you call? The DreamBusters!!!"
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
                    Article 13 of the GDPR, the EU privacy regulation introduced in 2018, requires the data subject to be informed of their rights and options in relation to personal data by the data controller.<br /><br />
                    The privacy policy shall, in principle, be provided in writing and preferably in electronic format, although other means are permitted.<br /><br />

                    Here is what can not be missing in the information on the processing of personal data:<br />
                    → The identity and contact details of the controller and, where applicable, of its representative;<br />
                    → The contact details of the data protection officer, where we are appointed;<br />
                    → The purposes of the processing for which the personal data are intended and the legal basis for the processing;<br />
                    → The legitimate interests pursued by the controller or by third parties;<br />
                    → The recipients or categories of recipients of the personal data, if any;<br />
                    → Where relevant, the intention of the controller to transfer personal data to a third country or to an international organisation and the existence or absence of an adequacy decision by the Commission or, in the case of transfers, a reference to appropriate or appropriate safeguards and the means to obtain a copy of those safeguards or the place where they have been made available.<br /><br />

                    The contents of the information are listed exhaustively in articles 13 and 14 of the GDPR and are partly broader than the Privacy Code.<br />
                    In particular, the data controller must always specify the contact details of the DPO (Data Protection Officer), where applicable,<br /> the legal basis for the processing, what is its legitimate interest if this is the legal basis for the processing.
                    The privacy policy must also indicate the possible transfer of personal data to third countries and the means by which
                    The communication of the information on the processing of personal data (ex. art. 13 of the Privacy Code) must be provided, in the case of personal data not collected directly from the data subject (art. 14 of the Regulation), within a maximum of one month from the collection,<br /> or at the time of the communication of the data to third parties or to the data subject.<br />
                    Anyone who fails to disclose this information to the user commits an administrative offence punishable by severe penalties.
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


