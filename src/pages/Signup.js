import styles from './Signin.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { useState } from 'react';
import axios from 'axios';
import { Backend } from '../utils/constants';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { store } from '../redux/store';
import { logUser, setJwt } from '../redux/userSlice';


const Signup = () => {

    const jwt = useSelector((state) =>  state.user.jwt)


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ frstnm , setFrstnm ] = useState("");
    const [ lstnm , setLstnm ] = useState("");

    const [ userExist , setUserExist ] = useState(false);

    const HandleSignup = (loginData) => {
        console.log(loginData)
        if (loginData.info === 'exist'){
            setUserExist(true);
        }
        else if (loginData.info === 'new'){
            store.dispatch(logUser(email))
            store.dispatch(setJwt(loginData.jwt))
        }
    }

    const SignUp = async (e) => {
        e.preventDefault();
        console.log("POST sign up data",email)
        try {
            const response = await axios.post(`${Backend}/api/customer/signup`, { email: email, pwd: password , firstname:frstnm , lastname:lstnm});
            HandleSignup(response.data)
                
        } catch (error) {
            console.error(error);
        }
    }

    


    if (jwt.length > 0) {
        return(
            <Navigate replace to='/' />
        )
    }
    else {
        return(
            <>
                <Navbar/>
                <NavbarTwo/>
    
                <div className={styles.container}>
    
                    <h1 id="login" tabindex="-1">
                        Créer un compte
                    </h1>
                    
                    <form className={styles.wrapper}>
                        <input onChange={(e)=>setFrstnm(e.target.value)} type='text' placeholder='Prénom' required />
                        <input onChange={(e)=>setLstnm(e.target.value)} type='text' placeholder='Nom de famille' required />
                        <input onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='E-mail' required />
                        <input onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password'  required />
                        { userExist && <p>Il existe déjà un utilisateur avec cet e-mail.</p> }
                        <button onClick={SignUp} >Créer</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Signup ;