import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { image5, image7, logo } from '../assets/images'

export default function Subscribe() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems={'center'}
            gap={2}
            pt={'30vh'}
            pb={'30vh'}
            id="offers"

        >
            <Grid item lg={10} md={10} sm={10} xs={12} container justifyContent={'center'}>

                <Typography
                    sx={{ fontSize: { xs: 35, lg: 50, sm: 45, md: 45 } }}
                    color={'#56112e'} textAlign="center" fontWeight="bold">
                    Get Our Latest Offers
                </Typography>
            </Grid>

            <Grid item lg={7} md={7} sm={10} xs={12} container justifyContent={'center'}>

                <Typography
                    // sx={{ fontSize: { xs: 25, lg: 35, sm: 25, md: 25 } }}
                    variant='h6'
                    color={'#56112e'} textAlign="center" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.

                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={10} xs={11} container justifyContent={'center'} pt={5}>

                <Grid container item lg={5} md={5} sm={10} xs={12} style={{ display: 'flex', flexWrap: 'nowrap', backgroundColor: 'white', borderRadius: 25 }}>
                    <input placeholder='Your Email' style={{ outline: 'none', border: 'none', width: '100%', padding: '15px', borderRadius: 25 }} />
                    <Button variant='contained' sx={{ backgroundColor: '#56112e', color: 'white', borderRadius: 7, padding: '0px 30px' }}>SUBSCRIBE</Button>
                </Grid>
            </Grid>



        </Grid>

    )
}
