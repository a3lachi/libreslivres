import styles from './Signin.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";

const Signin = () => {


    return(
        <>
            <Navbar/>
            <NavbarTwo/>

            <div className={styles.container}>

                <h1 id="login" tabindex="-1">
                    Connexion
                </h1>
                
                <form className={styles.wrapper}>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password'  />
                    <button>Connexion</button>
                    <a href='/signup'>
                        Créer un compte
                    </a>
                </form>
            </div>
        </>
    )
}

export default Signin ;