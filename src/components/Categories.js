import styles from './Categories.module.css';
import ScienceImg from '../assets/img/science.png';
import EconomyImg from '../assets/img/economy.png';
import PhiloImg from '../assets/img/philosophy.png';
import EncyImg from '../assets/img/encyclopedia.png';
import HistoryImg from '../assets/img/history.png';
import NovelImg from '../assets/img/novel.png';
import LiteratureImg from '../assets/img/classic.png';
import ArabicImg from '../assets/img/arabic.png';





const Categories = () => {

    return(
        <div className={styles.container}>
            <h1>Catégories</h1>
            <div className={styles.categories}>
                <a href='categories/philo'>
                    <img alt="philo" src={PhiloImg}  width={300}/>
                    <p>Philosophie, Psychologie et Sociologie</p>
                </a>
                <a href='categories/science' >
                    <img alt="science" src={ScienceImg}  width={300}/>
                    <p>Science, technique et médecine</p>
                </a>
                <a href='categories/economie'>
                    <img alt="eco" src={EconomyImg}  width={300}/>
                    <p>Economie, actualité et politique</p>
                </a>
                <a href='categories/histoire' >
                    <img alt="histoire" src={HistoryImg}  width={300}/>
                    <p>Histoire et biographie</p>
                </a>
                <a href='categories/encyclopedie' >
                    <img alt="ency" src={EncyImg}  width={300}/>
                    <p>Encyclopédie, dictionnaire</p>
                </a>
                <a href='categories/romans' >
                    <img alt="novel" src={NovelImg}  width={300}/>
                    <p>Romans et thrillers</p>
                </a>
                <a href='categories/classic' >
                    <img alt="novel" src={LiteratureImg}  width={300}/>
                    <p>Litérature classique</p>
                </a>
                <a href='categories/arabic' >
                    <img alt="arabic" src={ArabicImg}  width={300}/>
                    <p>كتب باللغة العربية</p>
                </a>
                

            </div>
        </div>
    )
}


export default Categories ;