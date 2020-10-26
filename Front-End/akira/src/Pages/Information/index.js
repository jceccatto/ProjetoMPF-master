import React from 'react'
import './styles.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

const InformationPage = () => {
    return(
        <div id='page-information'>
            <Header/>
            <div className="container-informations">
                <div className="box-information">
                    <div id="email">
                        <div className="fade-icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <p>usuario@email.com.br</p>
                    </div>
                    <div id="telefone">
                        <div className="fade-icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <p>(41) 99999-9999</p>
                    </div>
                    <div id="address">
                        <div className="fade-icon">
                            <ion-icon name="navigate-outline"></ion-icon>
                        </div>
                        <p>Rua dos Bobos, nº 0</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default InformationPage;