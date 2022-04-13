import { app } from "../firebase/firebase-config";
import { 
    getStorage,
    ref, 
    uploadBytes
} from "firebase/storage";
import Swal from "sweetalert2";
const storage = getStorage(app);

export const guardarImagenUsuario = async(uid, file) => {
    try {
        const imageRef = ref(storage, `images/${uid}`);
        const resUpload = await uploadBytes(imageRef, file);
        Swal.fire({
            title: 'Congratulation!',
            text: 'Ingreso de imagen completado!',
            icon: 'success',
            confirmButtonText: 'ok'
        })
        return resUpload;
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Ocurrió un error al subir la imagen intentalo de nuevo',
            icon: 'error',
            confirmButtonText: 'ok'
        })
    }
}