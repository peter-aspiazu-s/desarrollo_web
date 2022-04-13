import { useContext } from "react";
import Swal from "sweetalert2";
import { ingresarTestimonio } from "../helpers/aggTestimonio";
import { guardarImagenUsuario } from "../helpers/guardarImagenUsuario";
import { obtenerImagenUsuario } from "../helpers/obtenerImagenUsuario";
import { useForm } from "../hooks/useForm";
import { Usercontext } from "./UserContext";

export const TestimonioCliente = () => {

    const { userGoogle, actualizarTestimonios, setUserPhoto } = useContext(Usercontext);
    
    const [ formValues, setFormValues, handleInputChange ] = useForm({
        nombre: '',
        mensaje: '',
        url: '',
        uid: userGoogle.uid,
        date: new Date(),
    });

    const { nombre, mensaje, url } = formValues;

    const subirImagen = () => {
        document.querySelector('#fileSelector').click();
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

    const handleClickAdd = async() => {

        if(isFormValid()){
            ingresarTestimonio( formValues );
            actualizarTestimonios();
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

    return ( 
        <div>
            <p className="mt-4 text-center">Bienvenido <b>{userGoogle.displayName}</b> para terminar el proceso
                agrega tu testimonio.</p>
            <div className="testimonio__card mt-3">
                    
                <i className="fa-solid fa-floppy-disk"
                onClick={ handleClickAdd }></i>

                
                <div className="testimonio__circle-img circle-border">
                        <input
                            className="testimonio__file"
                            id="fileSelector"
                            type="file"
                            name="url"
                            onChange={handleFileChange}
                        />
                        <i className="fa-solid fa-image ico-img" onClick={ subirImagen }></i>
                </div>  
                
                <input type="text"
                name="nombre"
                placeholder="Tu nombre"
                onChange={ handleInputChange }
                className="testimonio__form-name animate__animated animate__fadeIn" />
                
                <textarea
                type="text"
                name="mensaje"
                placeholder="Deja tu testimonio"
                onChange={ handleInputChange }
                className="testimonio__form-msg animate__animated animate__fadeIn"
                ></textarea>
                        
            </div>
        </div>
        
               
    )
}