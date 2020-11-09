import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './styles.css'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

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
                <ion-icon id='menu-icon' name="menu-outline" onClick={selectMenu}></ion-icon>
                </div>
            </div>
           
        </React.Fragment>
    );
}

export default Menu;