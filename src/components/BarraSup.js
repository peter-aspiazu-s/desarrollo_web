import { useContext, useState } from "react";
import { Formulario } from "./Formulario";
import { Navigation } from "./Navigation";
import { Usercontext } from "./UserContext";

export const BarraSup = () => {

    const {state, setState, form, setForm} = useContext(Usercontext);
    
    const handleClickMenu = () => {
        setState(!state);
    }

    const handleClickForm = () => {
        setForm(true)
    }

    console.log('Se volvio a renderizar BarraSup')
    

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
                <i 
                    className="fa-solid fa-envelope fa-xl pointer"
                    onClick={ handleClickForm }
                ></i>
            </div>

            {
                state && <Navigation />
            }

            {
                form && <Formulario />
            }

        </>
    )
} 