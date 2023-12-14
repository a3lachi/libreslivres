import styles from './Books.module.css'
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';


const Books = () => {

    const [ page , setPage ] = useState(1);

    
    const handleChange = (event,value) => {
        setPage(value);
      };

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
                <div>
                    <Pagination count={100} page={page} onChange={handleChange} />     
                </div>
            </div>
        </>
    )
}


export default Books;