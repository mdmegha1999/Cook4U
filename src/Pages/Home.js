import { Grid } from '@mui/material'
import React from 'react'
import { image2 } from '../assets/images'
import AboutDish from './AboutDish'
import DontMiss from './DontMiss'
import DownToOffers from './DownToOffers'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Offers from './Offers'
import Subscribe from './Subscribe'

export default function Home() {
    return (
        <div id="home">
            <div style={{ position: 'sticky', top: 0, height: 58, zIndex: 120 }}>
                <Header />
            </div>
            <Hero />
            <DontMiss />
            <Grid container pt={4} pb={3}>
                <img src={image2} width={'100%'} />
            </Grid>
            <AboutDish />
            <Offers />
            <DownToOffers />
            <Subscribe />
            <Footer />
        </div>
    )
}
