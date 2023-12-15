import styles from './Books.module.css'
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Backend } from '../utils/constants';
import { useNavigate } from 'react-router-dom';


const Books = () => {

    const navigate = useNavigate();

    const [ page , setPage ] = useState(1);
    const [ books , setBooks ] = useState([])
    
    const handleChange = (event,value) => {
        setPage(value);
    };

    useEffect(()=>{
        axios.get(`${Backend}/api/books/all`)
            .then((res)=>setBooks(JSON.parse(res.data)))
        
    },[])

    console.log(books);

    const navigateToBook = (path) => {
        console.log('clicked')
        navigate('/livres/'+path)
    }

    return (
        <>
            <Navbar />
            <NavbarTwo />
            <div className={styles.container}>
                <h1>Produits</h1>
                <div className={styles.wrapper} >
                    <div>Filtre :</div>
                    <div>Prix</div>
                </div>
                <ul className={styles.books}>
                    {books?.map((book, index) => (
                        <div onClick={(e)=>navigateToBook(book.fields.name+'_'+book.fields.author+'_'+book.fields.price)} key={index} className={styles.book}>
                            <img alt='book' src={'../assets/books/'+book.fields.name+book.fields.author+'1'} height={300}/>
                            <p>{book.fields.name}</p>
                            <p>{book.fields.price}.00 MAD</p>
                        </div>  
                        
                    ))}
                </ul>

                <div className={styles.slider} >
                    <Pagination count={100} page={page} onChange={handleChange} />     
                </div>
            </div>
        </>
    )
}


export default Books;