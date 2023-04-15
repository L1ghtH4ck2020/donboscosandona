import Logos from '/components/Logos'
import Footer from '/components/Footer'

export const siteName = "Dream island"
export const siteTitle = "Dream Island - gli acchiappasogni lo rendono possibile"
export const siteDescription = "Rendiamo i tuoi sogni realtà"

export const menu = [
    { title: '', url: '/' },
]

export const header = <Logos
     logoUrl="/images/dreamIsland.png"
     sponsorUrl=""
     color="#FFFFFF"
/>

const menuFooter = [
    { title: '', url: '/' },
]

const socials = [
    { title: '', imageUrl: '', url: '' },

]

let images = [
    { title: '', imageUrl: '', },

]

export const footer = <Footer
    imageUrl=""
    color="#272727"
    opacitycolor="1"
    opacity={1}
    title1="About Us"
    description1=""
    title2="Social"
    socials={socials}
    title3="I Settori"
    images={images}
    menu={menuFooter}
    copyright="Copyright (C) 2023 9dreams Agency."
/>