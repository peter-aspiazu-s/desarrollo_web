import { useForm } from "../hooks/useForm";
import { useContext } from "react";
import { Usercontext } from "./UserContext";
import validator from 'validator';
import Swal from 'sweetalert2';
import { guardarFormulario } from "../helpers/guardarFormulario";

export const Formulario = () => {

    const {form, setForm, userGoogle} = useContext(Usercontext);

    const [ formValues, setFormValues, handleInputChange ] = useForm({
        nombre: '',
        correo: '',
        numero: '',
        comentario: '',
        uid: userGoogle.uid,
        date: new Date()
    })

    console.log(formValues);

    const { nombre, correo, numero, comentario } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isFormValid()){
            guardarFormulario(formValues);
            handleClickRemove();
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
        } else if(!validator.isEmail(correo)){
            Swal.fire({
                title: 'Error!',
                text: 'El correo es incorrecto',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return false;
        } else if(comentario.length < 10){
            Swal.fire({
                title: 'Error!',
                text: 'El mensaje es requerido y debe tener 10 o más caracteres',
                icon: 'warning',
                confirmButtonText: 'ok'
            })
            return false;
        } else if(numero){
            if(Number(numero) && numero.length >= 10){
                return true;
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Debe ser numero y la longitud mayor o igual a 10',
                    icon: 'warning',
                    confirmButtonText: 'ok'
                })
                return false;
            }
        }
        setFormValues({
            ...formValues,
            uid: userGoogle.uid
        })
        return true;
    }
    
    const handleClickRemove = () => {
        setForm(false);
    }

    
    return ( form &&
        <div className="formulario animate__animated animate__backInDown">
            <i 
                className="fa-solid fa-circle-xmark fa-2xl"
                onClick={ handleClickRemove }
            ></i>
            <h2 className="formulario__h2">FORMULARIO</h2>
            <form 
                className="formulario__form"
                onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="Nombre..."
                    name="nombre"
                    value={ nombre }
                    className="formulario__input"
                    onChange={ handleInputChange } />
                <input 
                    type="email" 
                    placeholder="Correo Electrónico..."
                    name='correo'
                    value={ correo } 
                    className="formulario__input"
                    onChange={ handleInputChange } />
                <input 
                    type="tel" 
                    placeholder="Número Telefónico..."
                    name='numero'
                    value={ numero } 
                    className="formulario__input"
                    onChange={ handleInputChange } />
                <textarea 
                    placeholder="Describeme que tipo de sitio necesitas..." 
                    name='comentario'
                    value={ comentario }
                    className="formulario__textarea"
                    onChange={ handleInputChange } ></textarea>
                <input 
                    type="submit" 
                    className="formulario__submit" 
                    value="enviar" />
            </form>
        </div>
    )
}