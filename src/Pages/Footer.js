import { FacebookTwoTone, Instagram, Twitter, WhatsApp } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {

    const iconStyle = {
        color: '#56112e',
        padding: '5px',
        backgroundColor: '#ffdbb0',
        borderRadius: '20px',
        fontSize: 30,

    }
    return (
        <Grid container sx={{ backgroundColor: '#56112e', minHeight: '110vh' }} id="contact" justifyContent="center" alignItems={'center'}>
            <Grid container item lg={6} xs={12} sm={6} md={6} justifyContent="center" alignItems={'center'}>
                <Grid container item lg={10} xs={10} sm={10} md={10} gap={3}>
                    <Typography variant='h5' color={'#ffdbb0'}>Maraichi</Typography>
                    <Typography sx={{ fontSize: 18 }} color={'#ffdbb0'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Aliquam faucibus purus in massa tempor nec feugiat nisl</Typography>

                    <Grid container item lg={12} xs={12} sm={12} md={12} gap={3}>

                        <a href='#'> <FacebookTwoTone style={iconStyle} /></a>
                        <a href='#'><Instagram style={iconStyle} /></a>
                        <a href='#'><Twitter style={iconStyle} /></a>
                        <a href='#'><WhatsApp style={iconStyle} /></a>

                    </Grid>
                </Grid>
            </Grid>
            <Grid container item lg={6} xs={12} sm={6} md={6} justifyContent="center" p={3} gap={4}>
                <Grid container item lg={3} xs={12} sm={3} md={3} gap={1} justifyContent="center">
                    <Grid item lg={12} xs={12} sm={12} md={12}>
                        <Typography variant='h5' color="#ffdbb0" textTransform={'capitalize'}>About</Typography>
                    </Grid>
                    {['history', 'Our Team', 'brand Guidelines', 'Terms & Conditions', 'Privacy Policy'].map((item) =>
                        <Grid item lg={12} xs={12} sm={12} md={12} key={item}>
                            <Typography color="#ffdbb0" textTransform={'capitalize'}>{item}</Typography>
                        </Grid>
                    )}
                </Grid>
                <Grid container item lg={3} xs={12} sm={3} md={3} justifyContent="center" >
                    <Grid item lg={12} xs={12} sm={12} md={12}>
                        <Typography variant='h5' color="#ffdbb0" textTransform={'capitalize'}>Services</Typography>
                    </Grid>
                    {['how to order', 'our product', 'offers', 'promo', 'payment method'].map((item) =>
                        <Grid item lg={12} xs={12} sm={12} md={12} key={item}>
                            <Typography color="#ffdbb0" textTransform={'capitalize'}>{item}</Typography>
                        </Grid>
                    )}
                </Grid>
                <Grid item lg={3} xs={12} sm={3} md={3}   >
                    <Typography variant='h5' color="#ffdbb0" textTransform={'capitalize'}>Other</Typography>
                    {['contact us', 'help'].map((item) =>
                        <Grid item key={item} lg={12} xs={12} sm={12} md={12} pt={1}>
                            <Typography color="#ffdbb0" textTransform={'capitalize'}>{item}</Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid >
    )
}
