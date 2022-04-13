import { app } from "../firebase/firebase-config";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(app);

export const logoutGoogle = () => {
    signOut(auth);
}