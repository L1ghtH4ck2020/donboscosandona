import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "Dream island"
export const siteTitle = "Dream Island - gli acchiappasogni lo rendono possibile"
export const siteDescription = "Rendiamo i tuoi sogni realtà"

export const menu = [
    { title: 'Chi siamo', url: '/chi_siamo' },
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
    { title: 'Instagram', imageUrl: '', url: '' },
    { title: 'Tik Tok', imageUrl: '', url: '' },
    { title: 'Facebook', imageUrl: '', url: '' },
    { title: 'Telegram', imageUrl: '', url: '' },
    { title: 'Twitter', imageUrl: '', url: 'https://twitter.com/CampingOns' },
]



export const footer = <Footer
    color="#00000F"
    opacitycolor="1"
    opacity={1}
    title1="About us"
    description1="Siamo un'associazione che acchiappa i sogni delle persone e li realizza!! La nostra isola si trova in Spagna, più precisamnete nell'isola di Ons."
    title2="Social"
    socials={socials}
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>