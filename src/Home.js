import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BarraSup } from "./components/BarraSup";
import { Carrusel } from "./components/Carrusel";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Proyectos } from "./components/Proyectos";
import { RedesSociales } from "./components/RedesSociales";
import { Section } from "./components/Section";
import { Testimonios } from "./components/Testimonios";
import { Usercontext } from "./components/UserContext";
import { Yo } from "./components/Yo";
import { app } from "./firebase/firebase-config";
import { getAuth } from "firebase/auth";
import { leerData } from "./helpers/validarUsuario";
import { Login } from "./components/Login";
import { TestimonioCliente } from "./components/TestimonioCliente";
import { leerTestimonios } from "./helpers/leerTestimonios";
const auth = getAuth(app);

export const Home = () => {

    const [ state, setState ] = useState(false);
    const [ form, setForm ] = useState(false);
    const [ social, setSocial ] = useState(false);
    const [ userGoogle, setUserGoogle ] = useState({});
    
    /* 
        0: inicializado
        1: loading
        2: login completo
        3: login pero sin registro
        4: no hay nadie logueado
    */

    const [ currentUser, setCurrentUser ] = useState(0);
    const [ edit, setEdit ] = useState(false);
    const [ userLogin, setUserLogin ] = useState(false);
    const [ testimonio, setTestimonios ] = useState([]);
    const [ userPhoto, setUserPhoto ] = useState();

    let i;
    let testimoniosUser = [];

    const actualizarTestimonios = () => {
        leerTestimonios().then((testimonios) => {
            setTestimonios(testimonios);
        })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {

            if(user){
                for(i = 0; i < testimonio.length; i++){
                    testimoniosUser.push(testimonio[i].uid);
                    //if(testimoniosUser.indexOf(user.uid, i)){
                    if(false){
                        setCurrentUser(2);
                        console.log('true')
                    } else{
                        setCurrentUser(3);
                        console.log('false')
                    }
                }
                setUserLogin(true);
                setUserGoogle(user);
            } else {
                setUserLogin(false);
                setCurrentUser(4); // no existe el usuario
            }
        });

        actualizarTestimonios();
        
    }, [userGoogle]);

    

    return ( 
        <Usercontext.Provider value={{
            state,
            setState,
            form, 
            setForm,
            social,
            setSocial,
            userGoogle,
            edit,
            setEdit,
            currentUser,
            setCurrentUser,
            userLogin,
            actualizarTestimonios,
            testimonio,
            userPhoto, 
            setUserPhoto
        }}>
            
            <BarraSup />
            <Carrusel />
            <Main />
            <Section />
            <Proyectos />
            <Yo />
            <Testimonios />
            {
                (currentUser === 4) && <Login /> 
            }
            {
                (currentUser === 3) &&
                <TestimonioCliente />
            }
            <RedesSociales />
            <Footer />
        </Usercontext.Provider>
    );
};