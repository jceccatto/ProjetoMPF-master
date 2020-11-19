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

                menuBG.classList.remove('close');
                menuBG.classList.add('open');
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

            
            <nav id='div-menu-background' className='div-menu-background'>
                <ul className='menu-list'>
                    <div className='profile'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <h1>estagiario40959</h1>
                    </div>
                    <li className='menu-item'>Sobre</li>
                    <li className='menu-item'>Converse conosco</li>
                    <li className='menu-item'>Contato</li>
                    <li className='menu-item'>Sair</li>
                </ul>

            </nav>

            
           
        </React.Fragment>
    );
}

export default Menu;