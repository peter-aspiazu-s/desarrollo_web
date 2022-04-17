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
import { Login } from "./components/Login";
import { TestimonioCliente } from "./components/TestimonioCliente";
import { leerTestimonios } from "./helpers/leerTestimonios";
import { validarUsuario } from "./helpers/validarUsuario";
import { Formulario } from "./components/Formulario";
import { Navigation } from "./components/Navigation";
const auth = getAuth(app);

export const Home = () => {
    
    /* 
        0: inicializado
        1: loading
        2: login completo
        3: login pero sin registro
        4: no hay nadie logueado
    */

    const [ state, setState ] = useState(false);
    const [ form, setForm ] = useState(false);
    const [ social, setSocial ] = useState(false);
    const [ userGoogle, setUserGoogle ] = useState({});
    const [ currentUser, setCurrentUser ] = useState(0);
    const [ edit, setEdit ] = useState(false);
    const [ userLogin, setUserLogin ] = useState(false);
    const [ testimonio, setTestimonios ] = useState([]);
    const [ userPhoto, setUserPhoto ] = useState();
    const [ uid, setUid ] = useState();
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user) => {
            if(user){
                setCurrentUser(3);
                setUserLogin(true);
                setUserGoogle(user);
            } else {
                setUserLogin(false);
                setCurrentUser(4); // no existe el usuario
            }
        });
    }, [userGoogle]);
    
    const actualizarTestimonios = () => {
        leerTestimonios().then((testimonios) => {
            setTestimonios(testimonios);
        })
    };

    useEffect(() => {
        actualizarTestimonios();
    }, []);

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
            setUserPhoto,
            uid
        }}>
            <BarraSup />
            <Carrusel />
            <Main />
            <Section />
            <Proyectos />
            <Yo />
            <Testimonios />
            {
                (currentUser === 4) &&
                <Login /> 
            }
            {
                (currentUser === 3) &&
                <TestimonioCliente />
            }
            {
                state &&
                <Navigation />
            }
            {
                form &&
                <Formulario />
            }
            <RedesSociales />
            <Footer />
        </Usercontext.Provider>
    );
};