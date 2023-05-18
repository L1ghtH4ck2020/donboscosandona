import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = ""
export const siteTitle = ""
export const siteDescription = ""

export const menu = [
    { title: '', url: '' },
    { title: '', url: '' },
    { title: '', url: '' },
]

let images = [
    { imageUrl: '/images/' },
]

const menuFooter = [
    { title: '', url: '' },

]

const socials = [
    { title: 'Instagram', imageUrl: '', url: '' },
    { title: 'Tik Tok', imageUrl: '', url: '' },
    { title: 'Facebook', imageUrl: '', url: '' },
    { title: 'Telegram', imageUrl: '', url: '' },
    { title: 'Twitter', imageUrl: '', url: '' },
]

const menu2 = [
    { title: 'Sviluppatori:' },
    { title: 'Bagnoli Filippo,' },

]

export const footer = <Footer
    color="#00000F"
    opacitycolor="1"
    opacity={1}
    title1="About us"
    description1=""
    title2="Social"
    socials={socials}
    images={images}
    menu={menuFooter}
    menu2={menu2}
    copyright="Copyright (C) 2023 LightFlower Agency."
/>