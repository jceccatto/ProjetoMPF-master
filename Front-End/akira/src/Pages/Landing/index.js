import React from 'react'
import './styles.css'
import Header from '../../Components/Header/'
import Menu from '../../Components/Menu'
import Button from '@material-ui/core/Button'
import Tips from '../../Components/Tips'
import Footer from '../../Components/Footer'
import Divider from '@material-ui/core/Divider';

const LandingPage = () => {

    return(
        <div id='page-landing'>
            <Header />
            <div className='container'>
                <div className='title-container'>
                    <h1>
                        Conte-nos o seu problema
                    </h1>
                    <Button className='' onClick='wave()'>
                        Conversar com nosso bot
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </Button>
                </div>
                <hr/>
                <div className='container-tips'>
                    <h1>Dicas rápidas</h1>
                    <p>Aqui você pode encontrar algumas dicas rápidas solucionar seus problemas.</p>
                    <div className="accordion">
                        <Tips />
                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    );
}

export default LandingPage;