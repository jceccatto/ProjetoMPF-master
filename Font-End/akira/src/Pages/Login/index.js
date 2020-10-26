import React from 'react'
import './styles.css'
import Logo from '../../assets/img/azul-logo.svg'
import TextField from '@material-ui/core/TextField';

const LoginPage = () => {
    return(
        <div id='login-page'>
         <div className="container-login">
            <div className="logo">
                <img src={Logo} alt="" className='logo-header'/>
            </div>
            <div className='input-login'>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Senha" variant="outlined" />
            </div>
         </div>
        </div>
    );
}

export default LoginPage