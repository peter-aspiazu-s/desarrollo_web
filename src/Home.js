import { useState } from "react";
import { BarraSup } from "./components/BarraSup";
import { Carrusel } from "./components/Carrusel";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Proyectos } from "./components/Proyectos";
import { RedesSociales } from "./components/RedesSociales";
import { Section } from "./components/Section";
import { Usercontext } from "./components/UserContext";
import { Yo } from "./components/Yo";

export const Home = () => {

    const [ state, setState ] = useState(false);

    const [ form, setForm ] = useState(false);

    const [ social, setSocial ] = useState(false);

    return (
        <Usercontext.Provider value={{
            state,
            setState,
            form, 
            setForm,
            social,
            setSocial
        }}>
            <BarraSup />
            <Carrusel />
            <Main />
            <Section />
            <Proyectos />
            <Yo />
            <RedesSociales />
            <Footer />
        </Usercontext.Provider>
    );
};