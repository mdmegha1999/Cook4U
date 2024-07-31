import { Close, Expand, Toc } from '@mui/icons-material'
import { Button, Collapse, Grid, List } from '@mui/material'
import React, { useState } from 'react'
import { logo } from '../assets/images'

export default function Header() {
    const [showList, setShowList] = useState(false)
    const headerButtons = [
        {
            title: "Home",
            route: '#home',
        },
        {
            title: "About",
            route: '#about',
        },
        {
            title: "Menu",
            route: '/products',
        },
        {
            title: "Offers",
            route: '#offers',
        },
        {
            title: "Contact",
            route: '#contact',
        }
    ]

    return (
        <Grid container justifyContent={'center'} alignItems="center" sx={{ backgroundColor: '#56112e', }}>
            <Grid container justifyContent={'center'} p={2} item xs={12} lg={6} md={10} sm={12} >
                {
                    (window.innerWidth > 450 || showList) ? headerButtons.map((button, index) => <Grid key={index} item xs={12} lg={2} sm={2} md={2} container justifyContent={'center'}>
                        <Button
                            onClick={() => setShowList(false)}
                            href={button.route}
                            style={{ textDecoration: 'none', color: '#ffdbb0' }}>{button.title}
                        </Button>
                    </Grid>)
                        : null}
                {window.innerWidth > 450 ? null : <Button style={{ color: 'white' }} onClick={() => setShowList(!showList)}><img src={logo} height="20px" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COOK4U &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {showList ? <Close /> : <Toc />}</Button>}
            </Grid>
        </Grid >
    )
}
