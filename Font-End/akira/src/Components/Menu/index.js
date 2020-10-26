import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    drawer: {
        height: '100%',
        width: '35rem',
        backgroundColor: 'rgb(152,113,245,0.5)',
        color: 'white',
    }
  }));

const Menu = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    function selectMenu(){
        setOpen(!open)
    }
    
    return(
        <React.Fragment>
            <div className='div-menu-icon'>
                <div className="rotate-icon">
                 <ion-icon id='menu-icon' name="grid-outline" onClick={selectMenu}></ion-icon>
                </div>
            </div>
            <div className='container-menu'>
                <SwipeableDrawer
                    open={open}
                    onClose={selectMenu}
                    anchor={"right"}
                    classes={{paper: classes.drawer}}
                    >
                        <div className="container-items">
                            <Link to='/' className='link'>
                                <div className='item-menu'>
                                        <div className="rotate-in-icon">
                                            <ion-icon name="home-outline"></ion-icon>
                                        </div>
                                        <h2>Início</h2>
                                </div>
                            </Link>

                            <div className='item-menu'>
                                <div className="rotate-icon">
                                <ion-icon name="settings-outline"></ion-icon>
                                </div>
                                <h2>Administrador</h2>
                            </div>
                            <Link to='/contato' className='link'>
                                <div className='item-menu'>
                                        <div className="shake-icon">
                                            <ion-icon name="call-outline"></ion-icon>
                                        </div>
                                        <h2>Contato</h2>
                                </div>
                            </Link>
                            <div className='item-menu'>
                                <div className="out-icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                                </div>
                                <h2>Logout</h2>
                            </div>
                        </div>
                </SwipeableDrawer>
            </div>
        </React.Fragment>
    );
}

export default Menu;