import styles from './MidFirst.module.css';
import LibraryImg from '../assets/img/library.jpeg';
const MidFirst = () => {


    return(
        <div className={styles.container}>
            <div className={styles.text}>
                <p>Votre destination en ligne pour échanger et découvrir de nouveaux mondes à travers les pages.</p>
                <p>Notre plateforme offre une communauté dynamique d'amoureux de la lecture qui souhaitent partager leurs trésors littéraires.</p>
            </div>
            <div>
                <img alt="library" src={LibraryImg} />
            </div>
        </div>
    )
}

export default MidFirst ;