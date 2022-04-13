import { app } from "../firebase/firebase-config";
import { 
    getStorage,
    ref, 
    getDownloadURL
} from "firebase/storage";
const storage = getStorage(app);

export const obtenerImagenUsuario = async(url) => {
    try {
        const imageRef = ref(storage, url);
        const urlImage = await getDownloadURL(imageRef);
        return urlImage;
    } catch (error) {
        console.error(error);
    }
}