import { useContext } from "react"
import { Usercontext } from "./UserContext"

export const RedesSociales = () => {


    const { social, setSocial, setForm, userLogin } = useContext( Usercontext );
    
    const handleSocialAdd = () => {
        setSocial(!social);
    }

    const handleClickForm = (e) => {
        e.preventDefault();
        setForm(true);
        setSocial(!social);
    }


    return (
        <>  
            <div 
                className={ (social) ? "social__enlace"
                                    : "social__enlace social__enlace-hover" } 
                title="Redes Sociales"
                onClick={ handleSocialAdd }>
                <i className={ (social) ? "fa-solid fa-link-slash"
                                    : "fa-solid fa-link" }                    
                ></i>
            </div>

            {
                social 
                
                && 

                <div className="redes__container animate__animated animate__bounceInUp animate__faster">
                    <div className="redes__enlace">
                        <a href="https://wa.me/593967454468" title="whatsapp" target="_blank"><i className="fa-brands fa-whatsapp-square"></i></a>
                    </div>
                    {
                        (userLogin) && 
                        <div className="redes__enlace">
                            <a href="#" title="correo" onClick={ handleClickForm }><i className="fa-solid fa-square-envelope"></i></a>
                        </div>
                    }
                    <div className="redes__enlace">
                        <a href="https://www.instagram.com/paspiazus/" title="instagram" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="tel:593967454468" title="llámame"><i className="fa-solid fa-phone"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="https://www.facebook.com/Aspiazu-Tecnologia-107942758626970/" title="llámame" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            }

            
        </>
    )
    
}