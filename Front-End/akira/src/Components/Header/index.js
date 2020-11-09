import React from 'react'
import './styles.css'
import Logo from '../../assets/img/logoMPF/mpf_branca.png'
import Menu from '../Menu';

function Header(){

    function selectMenu(){
        var menu = document.getElementById('div-menu');

        if(menu.style.display === 'none'){
            menu.style.display = 'block';   
        } else{
            menu.style.display = 'none';
        }

    }

    return(
        <header className='page-header has-shown'>
            <img src={Logo} alt="MPF" className='logo-header'/>
            <Menu />
        </header>
    );
}

export default Header;