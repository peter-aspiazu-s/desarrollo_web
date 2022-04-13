import { GoogleAuthProvider } from "firebase/auth";
import { loginGoogle } from "../helpers/loginGoogle";

export const Login = () => {

    const handleGoogleLogin = async() => {
        const googleProvider = new GoogleAuthProvider();
        await loginGoogle(googleProvider);
    }

    return (
        <div className="google__div mt-8">
            <p className="text-center">Hola si he trabajado en tu sitio web y deseas poner tu testimonio
                        puedes iniciar sesión con google y agregar tu mensaje</p>
            <div 
                className="google-btn mt-2"
                onClick={ handleGoogleLogin }
            >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
        </div>
    )
}