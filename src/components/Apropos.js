import styles from './Apropos.module.css';

const Apropos = () => {


    return(
        <div className={styles.container}>
            <h1>A propos de nous</h1>
            <ul className={styles.wrapper}>
                <li>
                    <h3>Qui sommes-nous ?</h3>
                    <div><strong>Libres Livres</strong> est une librairie en ligne qui met tout en oeuvre pour créer au travers de ses solutions de collecte, d'achat et de vente de livre d'occasion de la valeur pour ses clients, l'environnement et le social afin de lutter contre le gaspillage et promouvoir l'économie circulaire en donnant une seconde vie au livres.</div>
                </li>
                <li>
                    <h3>Notre mission :</h3>
                    <div><strong>Libres Livres</strong> a construit son ADN autour de 3 piliers pour lutter en faveur de la planète et de l'humain : l'environnement, le social et le sociétal. Notre librairie a pour mission de donner une seconde vie aux livres afin de réduire l’impact sur l’environnement et favoriser l’accès à la culture à un prix raisonnable.</div>
                </li>
                <li>
                    <h3>Nos services :</h3>
                    <div className={styles.wrapperTwo}>
                        <ul>
                            <li>Vente de livres <strong>neufs</strong> et <strong>d'occasion</strong>.</li>
                            <li>Livres sur <strong>commandes.</strong></li>
                            <li>Livraison partout au <strong>Maroc.</strong></li>
                            <li><strong>Achat </strong>et <strong>collecte </strong>des livres dans toutes les villes marocaines</li>
                            <li><strong>Dons </strong>de livres pour <strong>associations </strong>et <strong>écoles</strong>. (contactez-nous pour plus d'informations).</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Apropos ;