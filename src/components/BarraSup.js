import { useContext } from "react";
import { Usercontext } from "./UserContext";
import { GoogleAuthProvider } from "firebase/auth";
import { loginGoogle } from "../helpers/loginGoogle";
import { logoutGoogle } from "../helpers/logoutGoogle";

export const BarraSup = () => {

    const {state, setState, userLogin} = useContext(Usercontext);
    
    const handleClickMenu = () => {
        setState(!state);
    }

    const handleGoogleLogin = async() => {
        const googleProvider = new GoogleAuthProvider();
        await loginGoogle(googleProvider);
    }

    const handleGoogleLogout = () => {
        logoutGoogle();
    }

    return (
        <>
            <div id="inicio"></div>
            <div role="banner" className={ state ? "container text-center barrasup__div2"
                                   : "container text-center barrasup__div"}>
                <i 
                    className={ state ? "fa-solid fa-xmark fa-xl pointer" 
                                      : "fa-solid fa-bars fa-xl pointer"}
                    onClick={ handleClickMenu }
                ></i>
                <i className="fa-solid fa-code"></i>
                <h1>DESARROLLO WEB</h1>
                {
                    (userLogin) &&  
                        <i 
                            className="fa-solid fa-user-large-slash fa-xl pointer"
                            title="Logout" 
                            alt="Logout"
                            onClick={handleGoogleLogout}
                        ></i>
                }
                {
                    (!userLogin) &&
                    <i 
                        className="fa-solid fa-user fa-xl pointer" 
                        title="Login" 
                        alt="Login" 
                        onClick={handleGoogleLogin}
                    ></i>
                }
            </div>
        </>
    )
} 