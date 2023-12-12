import styles from './Cart.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";

const Cart = () => {


    return(
        <>
            <Navbar/>
            <NavbarTwo/>
            <div className={styles.container}>
                Votre panier est vide.

            </div>

        </>
    )

}

export default Cart ;