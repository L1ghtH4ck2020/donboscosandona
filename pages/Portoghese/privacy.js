import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'
import Footer from '/components/Footer'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'quem nós somos', url: '/Portoghese/chi_siamo' },
    { title: 'onde estamos', url: '/Portoghese/dove-siamo' },
    { title: 'Home', url: '/Portoghese/index-portoghese' },
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
