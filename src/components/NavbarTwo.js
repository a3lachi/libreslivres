import styles from './NavbarTwo.module.css';

const NavbarTwo = () => {


    return(
        <div className={styles.container}>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/categories">Catégories</a>
            </div>
            <div>
                <a href="/livres">Nos livres</a>
            </div>
            <div>
                <a href="/blog">Blog</a>
            </div>
            <div>
                <a href="/contact">Contactez-nous</a>
            </div>
        </div>
    )
}

export default NavbarTwo ;