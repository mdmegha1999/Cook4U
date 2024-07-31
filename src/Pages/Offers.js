import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { image4, image5 } from '../assets/images'

export default function Offers() {
    return (
        <Grid container p={2}
            sx={{ backgroundColor: '#56112e' }}
        >

            <Grid container item lg={6} xs={12} md={6} sm={6}
                justifyContent="center"
                alignItems={'center'}
            >
                <Grid item xs={11} lg={9} sm={9} md={9}
                    container flexDirection={'column'}
                    alignItems="start" gap={4}>
                    <Typography
                        sx={{ color: '#ffdbb0', fontSize: '10vh', }}
                        fontWeight="bold">See Our Offers</Typography>
                    <Typography variant='h5'
                        color={'#ffdbb0'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Typography>
                    <Button variant='contained'
                        sx={{
                            color: '#56112e', backgroundColor: '#ffdbb0',
                            fontWeight: 'bold', fontSize: 16,
                            borderRadius: 6, padding: '10px 70px'
                        }}>
                        SEE OFFERS</Button>
                </Grid>

            </Grid>
            <Grid container item lg={6} xs={12} md={6} sm={6}
                p={3}
                justifyContent="center" alignItems={'center'}>

                <img src={image5} style={{ maxWidth: '100%', maxHeight: '95%' }} />
            </Grid>
        </Grid>
    )
}
