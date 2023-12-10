import styles from './Navbar.module.css';
import Logo from '../assets/img/logo.png';
import Search from '../assets/icons/search.svg';
import Profil from '../assets/icons/user.png';
import Cart from '../assets/icons/cart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className={styles.container}>
            <div className={styles.containerOne}>
                <img src={Search} width={20} />
                <input type='text' placeholder='Chercher un livre' />
            </div>
            <div className={styles.containerThree}>
                <Link to="/">
                    <img src={Logo} width={200} />
                </Link>
            </div>
            <div className={styles.containerTwo}>
                <Link to="/profil">
                    <img src={Profil} width={20}/>
                </Link>
                <Link to="/cart">
                    <img src={Cart} width={20}/>
                </Link>
            </div>
        </div>
    )
}


export default Navbar ;