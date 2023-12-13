import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import NavbarTwo from "../components/NavbarTwo";
import { store } from '../redux/store'
import { logUser , badUser , setJwt} from "../redux/userSlice";
import { Navigate } from "react-router-dom";



const Profil = () => {
    const jwt = useSelector((state) =>  state.user.jwt)

    const logOutUser = () => {
        store.dispatch(setJwt(''))
    }
    return(
        <>
            <Navbar />
            <NavbarTwo />
            <button onClick={logOutUser} >Se déconnecter</button>
        </>
    )
    
}

export default Profil ;