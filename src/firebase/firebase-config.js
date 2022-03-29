// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3t4MqGpdKU1HFLwX5O52M4QQekgFFynw",
  authDomain: "desarrollo-web-d3e91.firebaseapp.com",
  projectId: "desarrollo-web-d3e91",
  storageBucket: "desarrollo-web-d3e91.appspot.com",
  messagingSenderId: "120084914198",
  appId: "1:120084914198:web:0e4d0622ccd0b0376dd537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const ingresarDatos = async(data) => {
  try {
      const docRef = await addDoc(collection(db, "/desarrollo-web/formulario/data"), {
          ...data
        });
      Swal.fire({
          title: 'Enviado',
          text: `${data.correo}`,
          icon: 'success',
          confirmButtonText: 'ok'
      })
  } catch (e) {
      console.log(e);
      Swal.fire({
          title: 'Error!',
          text: 'Algo salió mal intentalo de nuevo más tarde',
          icon: 'error',
          confirmButtonText: 'ok'
      })
  }
}