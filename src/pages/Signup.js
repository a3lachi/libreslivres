import styles from './Signin.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";

const Signup = () => {


    return(
        <>
            <Navbar/>
            <NavbarTwo/>

            <div className={styles.container}>

                <h1 id="login" tabindex="-1">
                    Créer un compte
                </h1>
                
                <form className={styles.wrapper}>
                    <input type='email' placeholder='Prénom' />
                    <input type='password' placeholder='Nom de famille'  />
                    <input type='password' placeholder='E-mail'  />
                    <input type='password' placeholder='Password'  />
                    <button>Créer</button>
                </form>
            </div>
        </>
    )
}

export default Signup ;