import { app } from "../firebase/firebase-config";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
const db = getFirestore(app);

export const leerData = async() => {
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
