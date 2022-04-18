import { useContext } from "react";
import { eliminarTestimonio } from "../helpers/eliminarTestimonio";
import { Usercontext } from "./UserContext";

export const Alert = () => {

    const { setAlert, userGoogle, actualizarTestimonios } = useContext(Usercontext);

    const handleAlertCancel = () => {
        setAlert(false);
    }

    const handleAlertDeleteTrue = () => {
        eliminarTestimonio(userGoogle.uid);
        actualizarTestimonios();
        setAlert(false);
    }

    return (
        <div className="alert animate__animated animate__fadeIn animate__faster">
            <div className="alert__div">
                <p className="alert__p">¿Seguro que quieres eliminar tú testimonio?</p>
                <div className="alert__div-div">
                    <button 
                        className="alert__button danger"
                        onClick={handleAlertCancel}    
                    >
                        Cancelar
                    </button>
                    <button 
                        className="alert__button primary"
                        onClick={handleAlertDeleteTrue}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}