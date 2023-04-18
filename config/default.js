import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "Dream island"
export const siteTitle = "Dream Island - gli acchiappasogni lo rendono possibile"
export const siteDescription = "Rendiamo i tuoi sogni realtà"

export const menu = [
    { title: 'Chi siamo', url: '/chi-siamo' },
    { title: 'Contatti', url: '/contatti' },
    { title: 'Dove siamo', url: '/dove-siamo' },
    { title: 'Privacy', url: '/privacy' },
]

let images = [
    {},
]

const menuFooter = [
    { title: 'Sviluppatori:' },
    { title: 'Bagnoli Filippo,' },
    { title: 'Valentina Segato,' },
    { title: 'Alessandro Shvets' },
]

const socials = [
    { title: 'instagram', imageUrl: '', url: '' },
]



export const footer = <Footer
    color="#000000"
    opacitycolor="1"
    opacity={1}
    title1="About us"
    description1=""
    title2="Social"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>