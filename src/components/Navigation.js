import 'animate.css';
import { useContext } from 'react';
import { scrollItemMenu } from '../helpers/navegacion';
import { Usercontext } from './UserContext';

export const Navigation = () => {

    const { setForm, state, setState, userLogin} = useContext(Usercontext);

    const handleClickAdd = () => {
        setForm(true)
        setState(false);
    }

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
        setState(false);
    }



    return ( state && 
        <div className="navigation animate__animated animate__fadeInLeft animate__faster">
            <nav className='navigation__nav'>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#inicio"
                    onClick={ handleClickItemMenu }>
                    <i className="fa-solid fa-house fa-xl me-1"></i>
                    INICIO
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#servicios"
                    onClick={ handleClickItemMenu }>
                    <i className="fa-solid fa-screwdriver-wrench fa-xl me-1"></i>
                    ¿PORQUE MIS SERVICIOS?
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#elementos"
                    onClick={ handleClickItemMenu }>
                    <i class="fa-brands fa-elementor fa-xl me-1"></i>
                    ELEMENTOS DE UN SITIO WEB
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#portafolio"
                    onClick={ handleClickItemMenu }>
                    <i className="fa-solid fa-folder-open fa-xl me-1"></i>
                    PORTAFOLIO
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#precios"
                    onClick={ handleClickItemMenu }>
                    <i class="fa-solid fa-hand-holding-dollar fa-xl me-1"></i>
                    PRECIOS
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#yo"
                    onClick={ handleClickItemMenu }>
                    <i className="fa-solid fa-user fa-xl me-1"></i>
                    ¿QUIEN SOY?
                </a>
                <a 
                    className="container text-center menu__item pointer" 
                    href="#testimonios"
                    onClick={ handleClickItemMenu }>
                    <i className="fa-solid fa-file-pen fa-xl me-1"></i>
                    TESTIMONIOS
                </a>
                {
                    (userLogin) &&
                    <a 
                        className="container text-center menu__item pointer"
                        onClick={ handleClickAdd }
                    >
                        <i className="fa-solid fa-envelope-open-text fa-xl me-1"></i>
                        CONTACTAME
                    </a>
                }
            </nav>
        </div>
    )
}