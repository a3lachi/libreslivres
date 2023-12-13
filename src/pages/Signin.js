import styles from './Signin.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { Backend } from '../utils/constants';
import axios from 'axios';
import { useState } from 'react';
import { store } from '../redux/store'
import { logUser , badUser , setJwt} from "../redux/userSlice";
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Signin = () => {

    const jwt = useSelector((state) =>  state.user.jwt)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ notUser , setNotUser ] = useState(false);


    const HandleLogin = (loginData) => {
        if (loginData.isUser === 'no'){
            setNotUser(true);
        }
        else {
            store.dispatch(logUser(email))
            store.dispatch(setJwt(loginData.jwt))
            setNotUser(false)
        }
    }

    const SignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${Backend}/api/customer/signin`, { email: email, pwd: password } , { headers:{'Content-Type': 'application/json'}});
            HandleLogin(response.data)
                
        } catch (error) {
            console.error(error);
            setNotUser(true);
        }
    };
    

    if (jwt.length > 0) {
        return (
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
                        Connexion
                    </h1>
                    
                    <form className={styles.wrapper}>
                        <input onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email' required/>
                        <input onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='Password'  required/>
                        { notUser && <p>E-mail ou mot de passe incorrect.</p>}
                        <button onClick={SignIn} >Connexion</button>
                        <a href='/signup'>
                            Créer un compte
                        </a>
                    </form>
                </div>
            </>
        )
    }
}

export default Signin ;