import { app } from "../firebase/firebase-config";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
const db = getFirestore(app);

export const guardarFormulario = async(data) => {
    try {
        const collectionRef = collection(db, "formularios");
        const docRef = doc(collectionRef, data.uid);
        await setDoc(docRef, data);
        
        Swal.fire({
            title: 'Enviado!',
            text: data.correo,
            icon: 'success',
            confirmButtonText: 'ok'
        })
      } catch (e) {
        Swal.fire({
            title: 'Error!',
            text: 'Algo salió mal intentalo de nuevo',
            icon: 'error',
            confirmButtonText: 'ok'
        })
      }
}