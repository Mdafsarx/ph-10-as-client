import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import { toast } from "react-toastify";
import axios from "axios";
export const AuthCOntext = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user)
    
    const [loading, setLoading] = useState(false);
    const [reload,setReload]=useState(false)

    //   Register
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  login
    const login = function (email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google Login and register 
    const googleProvider = new GoogleAuthProvider()
    function google() {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github Login and register
    const githubProvider = new GithubAuthProvider()
    function github() {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    
    function Logout() {
        signOut(auth)
            .then(() => toast.success('Logout successful'))
            .catch((error) => toast.error(error.message))
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            setUser(currentUser)
            setLoading(true)
            
            if (currentUser) {
                axios.post('https://ph-10-as-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                .then(data=>console.log(data.data))
            }
            else{
                axios.post('https://ph-10-as-server.vercel.app/logout',
                 loggedUser , {withCredentials:true})
            }
        })
    }, [reload]);




    return (
        <AuthCOntext.Provider value={{ register, login, google, github, user, Logout, loading, setLoading , reload,setReload}}>
            {children}
        </AuthCOntext.Provider>
    );
};

export default AuthProvider;