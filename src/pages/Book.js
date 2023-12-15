import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import styles from './Book.module.css';
import { useLocation } from 'react-router-dom';
import { store } from '../redux/store'
import { addOne } from '../redux/cartSlice';


const Book = () => {

    const location = useLocation();
    const url = location.pathname.split('/')[2].split('_')
    const book = url[0].split('%20').join(' ')
    const author = url[1].split('%20').join(' ')
    const price = url[2]
    console.log(book,author)

    const addToCart = () => {
        store.dispatch(addOne({book:book , author: author , price:price}));
    }

    return (
        <>
            <Navbar />
            <NavbarTwo />
            <div className={styles.container}>
                <div className={styles.wrapperOne}>
                    <img alt="book1" src={book+'_'+author+'_1'} />
                    <img alt="book2" src={book+'_'+author+'_2'} />
                </div>
                <div className={styles.wrapperTwo}>
                    <p className={styles.libreslivres} >Libres Livres</p>
                    <p className={styles.book} >{book} ,{author}</p>
                    <p className={styles.price}>{price}.00 MAD</p>
                    <button onClick={addToCart} >Ajouter au panier</button>
                    <button>Acheter maintenant</button>
                </div>
            </div>
        </>
    )
}

export default Book;