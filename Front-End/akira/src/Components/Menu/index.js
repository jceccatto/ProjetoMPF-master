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
        const menuBtn = document.getElementById('menu-btn');
        const menuBG = document.getElementById('div-menu-background')
        menuBtn.addEventListener('click', function(){
            if(!open){
                menuBtn.classList.add('open');

                menuBG.classList.add('open');
                menuBG.classList.remove('close');
            } else {
                menuBtn.classList.remove('open');

                menuBG.classList.add('close');
                menuBG.classList.remove('open');
            }
        });

        setOpen(!open)
    }
    
    return(
        <React.Fragment>
            <div className='div-menu-icon'>
                <div className="pulse-icon">
                    <div id='menu-btn' className="menu-btn" onClick={selectMenu}>
                        <div className="menu-btn_burger">
                        </div>
                    </div>
                </div>
            </div>

            
            <div id='div-menu-background' className='div-menu-background'>
                <h1>Menu</h1>

            </div>
           
        </React.Fragment>
    );
}

export default Menu;