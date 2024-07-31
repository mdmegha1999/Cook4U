import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { image3 } from '../assets/images'

export default function AboutDish() {
    return (
        <Grid container p={3} id="about">
            <Grid container item lg={6} xs={12} md={6} sm={6}
                p={3}
                justifyContent="center" alignItems={'center'}>

                <img src={image3} style={{ maxWidth: '100%', maxHeight: '90%' }} />
            </Grid>
            <Grid container item lg={6} xs={12} md={6} sm={6}
                justifyContent="center"
                alignItems={'center'}
            >
                <Grid item xs={12} lg={11} sm={11} md={11}
                    container flexDirection={'column'}
                    alignItems="start" gap={4}>
                    <Typography
                        sx={{ color: '#56112e', fontSize: '10vh', }}
                        fontWeight="bold">About Mariachi</Typography>
                    <Typography variant='h5'
                        color={'#56112e'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Typography>
                    <Button variant='contained'
                        sx={{
                            color: '#ffdbb0', backgroundColor: '#56112e',
                            fontWeight: 'bold', fontSize: 16,
                            borderRadius: 6, padding: '10px 70px'
                        }}>
                        TELL ME MORE</Button>
                </Grid>

            </Grid>
        </Grid>
    )
}
