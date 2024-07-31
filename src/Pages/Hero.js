import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { image1, logo } from '../assets/images'

export default function Hero() {
    return (
        <Grid container sx={{ position: 'relative', }}>
            <Grid p={2} item xs={12} lg={6} sm={12} md={6}
                container justifyContent={'center'} alignItems="center"
                sx={{ position: 'absolute', top: 0, left: 0 }} >

                <Grid item xs={12} lg={10} sm={10} md={10} p={1} pt={5}
                    container flexDirection={'column'}
                    alignItems="start" gap={6}>


                    <img src={logo} height="120px" />
                    <Typography
                        sx={{
                            color: { lg: '#ffdbb0', sm: '#ffdbb0', md: '#ffdbb0', xs: '#56112e' },
                            fontSize: {xs:'10vh',sm:'10vh',lg:'12vh',md:'12vh'},
                            marginTop: { lg: 0, sm: -5, md: 5, xs: 5 }

                        }}
                        fontWeight="bold">Mariachi</Typography>
                    <Typography variant='h5'
                        color={'#ffdbb0'}
                        sx={{
                            color: { lg: '#ffdbb0', sm: '#56112e', md: '#56112e', xs: '#56112e' },

                            marginTop: { lg: -5, sm: 10, md: 10, xs: 0 }
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Typography>
                    <Button variant='contained'
                        sx={{
                            backgroundColor: '#ffdbb0', color: '#56112e',
                            fontWeight: 'bold', fontSize: 16,
                            borderRadius: 6, padding: '10px 70px'
                        }}>
                        ORDER NOW</Button>
                </Grid>
            </Grid>
            <img src={image1} width="100%" />

        </Grid >)
}
