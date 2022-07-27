import { useContext } from 'react';
import { Usercontext } from './UserContext';
import { scrollItemMenu } from '../helpers/navegacion';

export const Footer = () => {

    const { setForm, userLogin} = useContext(Usercontext);

    const handleClickAdd = (e) => {
        e.preventDefault()
        setForm(true)
    }

    const handleClickItemMenu = (e) => {
        e.preventDefault();
        scrollItemMenu(e);
    }

    return (
        <footer className="footer">
            <div className='footer__resumen-negocio'>
                <h3>Aspiazu Tecnología</h3>
                <p>Aspiazu Tecnología es un emprendimiento que llevo algún tiempo queriendo empezar, hasta que al fin me animé, los servicios que brindo son de desarrollo web con la tecnología #1 para la web, es decir JAVASCRIPT.</p>
            </div>

            <div className='footer__redes'>
                <h3>¿Cómo puedes ubicarme?</h3>
                <a href="tel:593967454468" title="llámame">0967454468</a>
                <div className='footer__redes-ico'>
                    <a href="https://wa.me/593967454468" title="whatsapp" target="_blank"><i className="fa-brands fa-whatsapp-square"></i></a>
                    {
                        (userLogin) && 
                        <a href="#" title="correo" onClick={ handleClickAdd }><i className="fa-solid fa-square-envelope"></i></a>
                    }
                    <a href="https://www.instagram.com/paspiazus/" title="instagram" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="tel:593967454468" title="llámame"><i className="fa-solid fa-phone"></i></a>
                    <a href="https://www.facebook.com/Aspiazu-Tecnologia-107942758626970/" title="llámame" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                </div>
            </div>

            <div className="footer__menu">
                <a 
                    className="" 
                    href="#inicio"
                    onClick={ handleClickItemMenu }>
                    INICIO
                </a>
                <a 
                    className="" 
                    href="#servicios"
                    onClick={ handleClickItemMenu }>
                    ¿PORQUE MIS SERVICIOS?
                </a>
                <a 
                    className="" 
                    href="#elementos"
                    onClick={ handleClickItemMenu }>
                    ELEMENTOS DE UN SITIO WEB
                </a>
                <a 
                    className="" 
                    href="#portafolio"
                    onClick={ handleClickItemMenu }>
                    PORTAFOLIO
                </a>
                <a 
                    className="" 
                    href="#precios"
                    onClick={ handleClickItemMenu }>
                    PRECIOS
                </a>
                <a 
                    className="" 
                    href="#yo"
                    onClick={ handleClickItemMenu }>
                    ¿QUIEN SOY?
                </a>
                <a 
                    className="" 
                    href="#testimonios"
                    onClick={ handleClickItemMenu }>
                    TESTIMONIOS
                </a>
                {
                    (userLogin) &&
                    <a 
                        className=""
                        href='#'
                        onClick={ handleClickAdd }
                    >
                        CONTACTAME
                    </a>
                }
            </div>
            
            <div className='footer__derechos-autor'>
                <small className="footer__small">Todos los derechos reservados © | <br />
                    <a href="mailto:paspiazusabando@gmail.com">Peter Aspiazu </a>  2022
                </small>
            </div>
        </footer>
    )
}