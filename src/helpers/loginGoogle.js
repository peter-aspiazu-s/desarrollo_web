import { app } from "../firebase/firebase-config"
import { getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
const auth = getAuth(app);


export const loginGoogle = async(googleProvider) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Algo salió mal intentalo de nuevo',
            icon: 'error',
            confirmButtonText: 'ok'
        })
        console.log(error);
    }
}