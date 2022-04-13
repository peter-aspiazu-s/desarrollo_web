import { app } from "../firebase/firebase-config";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const db = getFirestore(app);

export const leerTestimonios = async() => {
    try {
        
        const testimonios = [];
        const collectionRef = collection(db, "testimonios");
        const snapshot = await getDocs(collectionRef);
        snapshot.forEach(doc => {
            testimonios.push(doc.data());
        });
        return testimonios;
    
    } catch (error) {
        console.log(error);
    }
}