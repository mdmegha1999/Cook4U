import { Grid, Typography } from '@mui/material'
import React from 'react'
import { image5, image7, logo } from '../assets/images'

export default function DownToOffers() {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems={'center'}
            pt={4} pb={4}
            // flexDirection="column"
            textAlign='center'
            // alignSelf={'center'}
            gap={2}
            sx={{
                backgroundImage: `url(${image7})`,
                height: '110vh', backgroundPosition: 'center center', backgroundSize: 'cover'
            }}
        >
            <Grid item lg={12} xs={12} container justifyContent={'center'}>

                <img src={logo} height="180px" />
            </Grid>
            <Grid item lg={9} md={10} sm={10} xs={12} container justifyContent={'center'}>

                <Typography sx={{ fontSize: { xs: 25, lg: 35, sm: 25, md: 25 } }} color={'#ffdbb0'} textAlign="center" fontWeight="bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.

                </Typography>
            </Grid>

            <Grid item lg={10} md={10} sm={10} xs={12} container justifyContent={'center'}>

                <Typography variant='h4' color={'#ffdbb0'} textAlign="center" fontWeight="bold">
                    Pedro Rodriguez
                </Typography>
            </Grid>

        </Grid>

    )
}
