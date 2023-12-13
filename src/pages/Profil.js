import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { store } from '../redux/store'
import { logUser , badUser , setJwt} from "../redux/userSlice";
import { Navigate } from "react-router-dom";
import styles from './Profil.module.css';
import { useState } from "react";


const Profil = () => {
    const jwt = useSelector((state) =>  state.user.jwt)

    const logOutUser = () => {
        store.dispatch(setJwt(''))
    }

    const [ cmnds , setCmnds ] = useState([])
    return(
        <>
            <Navbar />
            <NavbarTwo />
            <div className={styles.container}>
                <h2>Compte</h2>
                <button onClick={logOutUser} >Se déconnecter</button>
                <h6>Historique des commandes</h6>
                { cmnds.length>0 ? <p>Vos commande</p>
                    : <p>Vous n'avez encore passé aucune commande.</p>
                }

            </div>
        </>
    )
    
}

export default Profil ;