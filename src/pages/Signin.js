import styles from './Signin.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { Backend } from '../utils/constants';
import axios from 'axios';
import { useState } from 'react';

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = () => {
        axios.post(`${Backend}/api/customer/signin`, { email: email, pwd: password })
          .then(function (response) {
            console.log('response');
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }

    return(
        <>
            <Navbar/>
            <NavbarTwo/>

            <div className={styles.container}>

                <h1 id="login" tabindex="-1">
                    Connexion
                </h1>
                
                <form className={styles.wrapper}>
                    <input onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email' />
                    <input onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='Password'  />
                    <button onClick={SignIn} >Connexion</button>
                    <a href='/signup'>
                        Créer un compte
                    </a>
                </form>
            </div>
        </>
    )
}

export default Signin ;