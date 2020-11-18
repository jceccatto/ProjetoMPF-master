import React from 'react'
import './styles.css'
import Header from '../../Components/Header/'
import Button from '@material-ui/core/Button'
import Footer from '../../Components/Footer'
import Divider from '@material-ui/core/Divider';
import LogoBot from '../../assets/img/outstonelogo.png'

const LandingPage = () => {

    return(
        <div id='page-landing'>
            <Header />
            <div className='container'>
                <div className="logo-container">
                    <img src={LogoBot} alt="LogoBot"/>
                </div>
                <div className="title-container">
                    <h1>
                        Conheça o Akira
                    </h1>
                </div>
                <div className="buttons-container">
                    <div className="button">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <h2>Conversar com Akira</h2>
                    </div>
                    <div className="button">
                        <ion-icon name="alert-circle-outline"></ion-icon>
                        <h2>O que é o Akira?</h2>
                    </div>
                    <div className="button">
                        <ion-icon name="person-outline"></ion-icon>
                        <h2>Contato</h2>
                    </div>
                </div>
                
            </div>
        </div >
    );
}

export default LandingPage;