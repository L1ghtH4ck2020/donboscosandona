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
    { title: 'quem nós somos', url: '/Portoghese/chi_siamo' },
    { title: 'Contatos', url: '/Portoghese/contatti' },
    { title: 'onde estamos', url: '/Portoghese/dove-siamo' },
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
                title="Privacidade"
                description="Você teve um sonho e gostaria de realizá-lo? E para quem você vai ligar? Os Caça-Sonhos!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />

            <Paragraph
                title="Privacidade"
                maxWidth='lg'
                sx={{ marginTop: "10px", marginBottom: "60px", textAlign: 'center', }}
            >
                <p style={{ textAlign: "left" }}>
                    O artigo 13.o do RGPD, o Regulamento de Proteção de Dados da UE introduzido em 2018, exige que o titular dos dados seja informado dos seus direitos e possibilidades em relação aos dados pessoais do responsável pelo tratamento.
                    A política de privacidade é fornecida, em princípio, por escrito e, de preferência, em formato eletrónico, embora sejam permitidos outros meios.<br /><br />


                    Eis o que não pode faltar nesta política de privacidade:<br />
                    → A identidade e os dados de contacto do responsável pelo tratamento e, se for caso disso, do seu representante;<br />
                    → os dados de contacto do responsável pela proteção de dados, nos casos em que somos nomeados;<br />
                    → as finalidades do tratamento a que se destinam os dados pessoais, bem como a base jurídica do tratamento;<br />
                    → Os interesses legítimos prosseguidos pelo responsável pelo tratamento ou por terceiros;<br />
                    → Os eventuais destinatários ou categorias de destinatários dos dados pessoais;<br />
                    → Se for caso disso, a intenção do responsável pelo tratamento de transferir dados pessoais para um país terceiro ou uma organização internacional e a existência ou não de uma decisão de adequação da Comissão ou, no caso de transferências, a referência às garantias adequadas ou adequadas e os meios para obter uma cópia dessas garantias ou o local onde foram disponibilizadas.<br /><br />
                    O conteúdo desta política está listado de forma exaustiva nos artigos 13 e 14 do RGPD e é parcialmente mais abrangente do que o Código de Privacidade.<br />
                    Em particular, o responsável pelo tratamento deve sempre especificar os dados de contacto do Responsável pela Proteção<br /> de Dados (RPD-DPO), se existir, a base jurídica para o tratamento, qual é o seu interesse legítimo se este for a base jurídica para o tratamento.<br /><br />

                    Além disso, a política de privacidade deve indicar se os dados pessoais são transferidos para países terceiros e quais os meios utilizados para o fazer.<br />
                    No caso de dados pessoais não recolhidos diretamente junto do titular dos dados (artigo 14.o do Regulamento), a comunicação da informação sobre o tratamento de dados pessoais (por exemplo, artigo 13.o do Código de Privacidade) deve ser fornecida no prazo máximo de um mês após a recolha<br /> ou no momento da comunicação dos dados a terceiros ou ao titular dos dados.<br />
                    Qualquer pessoa que não divulgue estas informações ao utilizador está a cometer um delito administrativo que pode ser punido com sanções muito severas.
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
