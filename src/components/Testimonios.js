import { useContext, useEffect } from "react";
import { Usercontext } from "./UserContext";

export const Testimonios = () => {
    
    const { userGoogle, currentUser, edit, setEdit, testimonio, userPhoto, actualizarTestimonios } = useContext(Usercontext);

    useEffect(() => {
        actualizarTestimonios();
    },[userPhoto])

    const handleClickEdit = () => {
        setEdit(true);
    }

    const handleClickSave = () => {
        setEdit(false);
    }

    const prueba = async () => {
        const ref = document.querySelector('.testimonio__card');
        const id = ref.getAttribute('id');
    }

    return (
        <div className="container mt-8 testimonio" id="testimonios">
            <div>
                <h2 className="text-center">Testimonios de Clientes</h2>
            </div>
            
            <div className="testimonio__container" id={ userGoogle.uid }>
            {
            (!testimonio) ?  
                <div className="loading">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            :
            testimonio.map((testim, index) => {
                    
                return <div className="testimonio__card mt-5" key={index} id={testim.uid} onLoad={ prueba }>
                    
                    {
                        (currentUser === 2 && !edit) ? 
                            <i className="fa-solid fa-file-pen fa-xl me-1"
                            onClick={ handleClickEdit }></i>
                            
                            : (currentUser === 2 && edit) ?  
                            <i className="fa-solid fa-floppy-disk"
                            onClick={ handleClickSave }></i>
                            : ''
                    }
                    <div className="testimonio__circle-img">
                        <img loading="lazy" src={testim.url ? testim.url : './assets/img/user-img.svg'}  
                            alt={`Imagen de ${testim.nombre}`} 
                            title={`foto de ${testim.nombre}`} />
                            {
                                (currentUser === 2) && <i className="fa-solid fa-image"></i>
                            }
                    </div> 
                    {
                        (!edit) ? 
                            <h3 className="animate__animated animate__fadeIn">{ testim.nombre }</h3>
                            : (edit) &&
                            <input type="text"
                            name="nombre"
                            placeholder="Tu nombre"
                            className="testimonio__form-name animate__animated animate__fadeIn" />
                    }
        
                    {
                        (!edit) ? 
                        <p className="animate__animated animate__fadeIn">"{ testim.mensaje }"</p>
                        : (edit) &&
                        <textarea
                        type="text"
                        name="mensaje"
                        placeholder="Deja tu testimonio"
                        className="testimonio__form-msg animate__animated animate__fadeIn"
                        ></textarea>
                    }
                </div>
            })} 

            </div>
        </div>
    )
}