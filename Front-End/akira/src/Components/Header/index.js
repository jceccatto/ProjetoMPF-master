import React from 'react'
import './styles.css'
import Logo from '../../assets/img/logoMPF/mpf_branca.png'
import Menu from '../Menu';

function Header(){
    return(
        <React.Fragment className='has-shown'>
            <img src={Logo} alt="MPF" className='logo-header has-shown'/>
            <Menu />
        </React.Fragment>
    );
}

export default Header;