import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes=useStyles()

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography>
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                        Commerce.js
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}/>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color = "secondary"></Badge>
                            <ShoppingCart />
                        </IconButton>
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar