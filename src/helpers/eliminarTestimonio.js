import { app } from "../firebase/firebase-config";
import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const db = getFirestore(app);

export const eliminarTestimonio = (uid, func) => {
    try {
        const collectionRef = collection(db, "testimonios");
        const docRef = doc(collectionRef, uid);
        deleteDoc(docRef);
        console.log(func);
        Swal.fire({
            title: 'Eliminado!',
            text: "Recarga la página si aún vez tu testimonio",
            icon: 'success',
            confirmButtonText: 'ok'
        })

    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: 'Algo salió mal intentalo de nuevo',
            icon: 'error',
            confirmButtonText: 'ok'
        })
    }
}