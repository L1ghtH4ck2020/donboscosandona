import Head from 'next/head'
import Products from '@/components/Products'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Sobre nós', url: '/Portoghese/chi_siamo' },
    { title: 'Home', url: '/' },
    { title: 'Privacidade', url: '/Portoghese/privacy' },
]

let prodotti = [
    {
        title: "Hotéis de 3 estrelas",
        category: "Luxuriosa Quente😒",
        description: "",
        immagineUrl: "/images/baita.png",
    },
    {
        title: "Hotéis 5 estrelas",
        category: "Luxúria Boa😃",
        description: "",
        immagineUrl: "/images/hotel5telle.png",
    },
    {
        title: "Hotéis de 6 estrelas",
        category: "Pura Luxúria🤑",
        description: "",
        immagineUrl: "/images/hotel6telle.png",
    },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="Onde estamos"
                description="Você teve um sonho e gostaria de realizá-lo? E para quem vai ligar? Os DreamBusters!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'left' }}
                maxWidth='lg'
                title="Onde estamos">
                <p style={{fontSize: '19px'}}>
                    Ons é uma ilha espanhola pertencente ao pequeno arquipélago galego das Ilhas de Ons. Está localizado à entrada da Ria de Pontevedra e pertence administrativamente ao município de Bueu, localizado na província de Pontevedra. Juntamente com outros pequenos arquipélagos no norte de Espanha, como o arquipélago das Ilhas Cíes ou as ilhas de Sálvora e Cortagada, faz parte do Parque Nacional das Ilhas Atlânticas da Galiza.<br/>
                    A área total da ilha é de 4,25 km² e seu ponto mais alto corresponde ao topo do Alto do Cucorno a 128 metros de altura. Apesar de seu pequeno tamanho, a ilha tem 16 fontes de água potável que alimentam as reservas de água da ilha. O clima é qualificado como mediterrânico com temperaturas médias em torno de 14,2°C e com médias anuais relativamente altas.<br/>
                    A população total é de cerca de 81 habitantes. Apesar dos números de hoje, a demografia da ilha variou de forma desigual ao longo do século passado, tendo 530 habitantes em 1955 e apenas 16 em 1982. A população está concentrada principalmente na costa leste, onde as costas são caracterizadas por serem costas arenosas e encostas suaves, enquanto, a costa ocidental e diretamente exposta ao oceano é mais acidentada e rochosa.<br />
                    Suas praias são cristalinas e existem vários caminhos que levam ao farol ou ao Buraco do Inferno. A ilha é o lar do único parque de campismo sustentável da Galiza, com serviços de campismo, aluguer de cabines e glamping.
                    A praia de Melide está localizada no norte da ilha. Foi uma das primeiras praias de nudismo da Galiza e pode ser alcançada através de um caminho de dois quilómetros a partir do núcleo urbano da ilha.
                </p>  
            </Paragraph>
            <Products
              products={prodotti}
              cardWidth={4}
            
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
