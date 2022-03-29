import { useContext } from "react"
import { Usercontext } from "./UserContext"

export const RedesSociales = () => {

    const { social, setSocial } = useContext( Usercontext );

    const handleSocialAdd = () => {
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
                    <div className="redes__enlace">
                        <a href="mailto:paspiazusabando@gmail.com" title="gmail"><i className="fa-solid fa-square-envelope"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="https://www.instagram.com/paspiazus/" title="instagram" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="https://www.linkedin.com/in/peter-aspiazu/" title="linkedin" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="https://github.com/peter-aspiazu-s" title="github" target="_blank"><i className="fa-brands fa-github-alt"></i></a>
                    </div>
                    <div className="redes__enlace">
                        <a href="tel:593967454468" title="llámame"><i className="fa-solid fa-phone"></i></a>
                    </div>
                </div>
            }

            
        </>
    )
}