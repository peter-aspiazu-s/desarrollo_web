import { useContext, useEffect, useState } from "react";
import { Usercontext } from "./UserContext";
import Swal from "sweetalert2";
import { ingresarTestimonio } from "../helpers/aggTestimonio";
import { useForm } from "../hooks/useForm";
import { guardarImagenUsuario } from "../helpers/guardarImagenUsuario";
import { obtenerImagenUsuario } from "../helpers/obtenerImagenUsuario";

export const Testimonios = () => {

    const [ cardId, setCardId ] = useState(null);
    
    const { 
        userGoogle, 
        currentUser, 
        edit, setEdit, 
        testimonio, 
        actualizarTestimonios,
        setUserPhoto,
        setAlert 
        } = useContext(Usercontext);
    
    useEffect(() => {
        const pruebaId = () => {
            const ref = document.querySelector('.testimonio__card');
            const id = ref.getAttribute('id');
            setCardId(id);
            //actualizarTestimonios();
        }

        if(currentUser === 2){
            pruebaId();
            // console.log("prueba");
        }
        return () => {

        }
    }, [currentUser]);
    
    const handleClickEdit = () => {
        setEdit(true);
    }

    const [ formValues, setFormValues, handleInputChange ] = useForm({
        nombre: '',
        mensaje: '',
        url: '',
        uid: userGoogle.uid,
        date: new Date(),
    });

    const { nombre, mensaje, url } = formValues;

    const subirImagen = () => {
        document.querySelector('#fileSelector2').click();
    }

    const handleFileChange = async(e) => {
        const file = e.target.files[0];
        const res = await guardarImagenUsuario(userGoogle.uid, file);
        const urlImagen = await obtenerImagenUsuario(res.metadata.fullPath);
        setUserPhoto(urlImagen);
        setFormValues({
            ...formValues,
            uid: userGoogle.uid,
            url: urlImagen
        })
    }

    const handleClickSave = () => {
        if(isFormValid){
            ingresarTestimonio( formValues );
            actualizarTestimonios();
            setEdit(false);
        }
    }

    const isFormValid = () => {
        if(nombre.trim().length === 0){
            Swal.fire({
                title: 'Error!',
                text: 'El nombre es requerido',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return false;
        } else if(mensaje.length < 10){
            Swal.fire({
                title: 'Error!',
                text: 'El mensaje es requerido y debe tener 10 o más caracteres',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return false;
        } else if(url.length < 1){
            Swal.fire({
                title: 'Error!',
                text: 'La imagen es requerida',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return false;
        } 
        return true;
    }

    const handleAlertDelete = () => {
        setAlert(true);
    }

    return (
        <div className="container mt-8 testimonio" id="testimonios">
            <div>
                <h2 className="text-center">Testimonios de Clientes</h2>
            </div>
            
            <div className="testimonio__container">
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
                    
                return <div className="testimonio__card" key={index} id={testim.uid}>
                    
                    {
                        ((currentUser === 2) && (testim.uid === userGoogle.uid) && !edit) ? 
                            <i className="fa-solid fa-file-pen fa-xl me-1 mt-1"
                            onClick={ handleClickEdit }></i>
                            
                            : ((currentUser === 2) && (testim.uid === userGoogle.uid) && edit) ?  
                            <i className="fa-solid fa-floppy-disk"
                            onClick={ handleClickSave }></i>
                            : ''
                    }
                    {
                        ((currentUser === 2) && (testim.uid === userGoogle.uid) && !edit) &&
                        <i 
                            className="fa-solid fa-xmark"
                            onClick={handleAlertDelete}
                        ></i>
                    }
                    <div className="testimonio__circle-img">
                        <img loading="lazy" src={testim.url ? testim.url : './assets/img/user-img.svg'}  
                            alt={`Imagen de ${testim.nombre}`} 
                            title={`foto de ${testim.nombre}`} />
                            <input
                                className="testimonio__file"
                                id="fileSelector2"
                                type="file"
                                name="url"
                                onChange={handleFileChange}
                            />
                            {
                                ((currentUser === 2) && (testim.uid === userGoogle.uid) && edit) &&
                                 <i 
                                    className="fa-solid fa-image"
                                    onClick={subirImagen}
                                ></i>
                            }
                    </div> 
                    {
                        (!edit) ? 
                            <h3 className="animate__animated animate__fadeIn">{ testim.nombre }</h3>
                            : ((currentUser === 2) && (testim.uid === userGoogle.uid) && edit) ?
                            <input type="text"
                            name="nombre"
                            placeholder="Tu nombre"
                            //defaultValue={testim.nombre}
                            className="testimonio__form-name animate__animated animate__fadeIn"
                            onChange={handleInputChange} 
                            />
                            :
                            <h3 className="animate__animated animate__fadeIn">{ testim.nombre }</h3>
                    }
        
                    {
                        (!edit) ? 
                        <p className="animate__animated animate__fadeIn">"{ testim.mensaje }"</p>
                        : ((currentUser === 2) && (testim.uid === userGoogle.uid) && edit) ?
                        <textarea
                        type="text"
                        name="mensaje"
                        //defaultValue={testim.mensaje}
                        placeholder="Deja tu testimonio"
                        className="testimonio__form-msg animate__animated animate__fadeIn"
                        onChange={handleInputChange}
                        ></textarea>
                        :
                        <p className="animate__animated animate__fadeIn">"{ testim.mensaje }"</p>
                    }
                </div>
            })} 
            </div>
        </div>
    )
}