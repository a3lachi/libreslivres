import styles from './Navbar.module.css';
import Logo from '../assets/img/logo.png';
import Search from '../assets/icons/search.svg';
import Profil from '../assets/icons/user.png';
import Cart from '../assets/icons/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const jwt = useSelector((state) =>  state.user.jwt)


    return (
        <div className={styles.container}>
            <div className={styles.containerOne}>
                <img alt="search" src={Search} width={20} />
                <input type='text' placeholder='Chercher un livre' />
            </div>
            <div className={styles.containerThree}>
                <Link to="/">
                    <img alt="libres logo" src={Logo} width={200} />
                </Link>
            </div>
            <div className={styles.containerTwo}>
                { jwt.length > 0 ? <Link to="/profil">
                    <img alt="profil" src={Profil} width={20}/>
                </Link> : <Link to="/signin">
                <img alt="profil" src={Profil} width={20}/>
            </Link>}
                <Link to="/cart">
                    <img alt="cart" src={Cart} width={20}/>
                </Link>
            </div>
        </div>
    )
}


export default Navbar ;