import Head from 'next/head'


import Layout from '/components/Layout'
import LandingHero from '/components/LandingHero2.js'
import Paragraph from '/components/Paragraph'

import { getDatiArticoli } from '/lib/articoli'


const menu = [
    { title: 'Home', url: '/' },
    { title: 'onde estamos', url: '/Portoghese/dove-siamo' },
    { title: 'Privacidade', url: '/Portoghese/privacy' },
]

export default function Home({ datiArticoli }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/island.png" />
            </Head>

            <LandingHero
                opacity={0.3}
                title="quem nós somos"
                description="Você teve um sonho e gostaria de realizá-lo? E para quem você vai ligar? Os Caça-Sonhos!!!"
                buttonUrl=''
                buttonText=""
                imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominica-isola-caraibi-foto-1619540583.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"
                menu={menu}
            />
            <Paragraph sx={{ textAlign: 'center' }}
                maxWidth='lg'
                title="quem nós somos"
                subtitle="Das origens até hoje" >
                Você certamente está se perguntando quem somos...<br /><br />

                Deixe-me contar como tudo começou.<br />
                Há 10 anos atrás tive uma ideia que virou minha vida de cabeça para baixo resolvi começar a investir meu dinheiro até não ter mais espaço em casa para colocá-lo, <br />
                comecei a estudar economia e a trabalhar meio período como garçom para realizar meu sonho,<br /> ser a pessoa mais rica do mundo. Depois que ganhei algum dinheiro, usei-o para livros e cursos de estudo;<br /> depois de alguns anos de trabalho árduo.<br /><br />
                Ele conseguiu, eu nem acreditei e resolvi abrir negócios aqui e ali para dobrar minha renda,<br /> então finalmente me tornei o empresário mais rico do planeta.<br />
                Mas depois de tanto trabalho me vi sem nada para fazer, até que um dia tive uma ideia,<br /> porque não comprar uma ilha e realizar os sonhos de outras pessoas, eu já realizei o meu, mas algumas pessoas talvez eles não podia..<br /><br />

                Então abri uma empresa, a corporação dos sonhos, e contratei alguns dos melhores engenheiros, artistas, designers, estilistas, e assim por diante,<br />
                e alguns dos meus amigos mais próximos para gerir a empresa, e desde 2023 estamos finalmente operacionais.<br /><br />

                Comprei uma agência na costa de Playa de Montalvo, por isso decidi mudar o nome da empresa.<br />
                Suenos Locos S.A.<br />
                A empresa é proprietária do parque, localizado na ilha de Ons, onde se realizam todos os sonhos mais loucos e pessoais de todos os sonhadores do mundo.<br /><br />

                Alfonso il Grosso e minha equipe realizarão seus sonhos.<br />
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