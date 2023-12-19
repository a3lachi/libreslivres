import styles from './Cart.module.css';
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { useSelector } from 'react-redux';
import { store } from '../redux/store';
import { removeItem } from '../redux/cartSlice';

const Cart = () => {

    const items = useSelector((state)=> state.cart.itms)
    console.log(items)

    const handleDelete = (index) => {
        store.dispatch(removeItem(index));
    }

    return(
        <>
            <Navbar/>
            <NavbarTwo/>
            <div className={styles.container}>
                { items?.length>0 ? 
                    items?.map((book,index)=>(
                        <div key={index}>
                            <p>{book.book} - {book.author} - {book.price}</p>
                            <button onClick={()=>handleDelete(index)} >Supprimer</button>
                        </div>
                    ))
                : <p>Votre panier est vide.</p>}

            </div>

        </>
    )

}

export default Cart ;