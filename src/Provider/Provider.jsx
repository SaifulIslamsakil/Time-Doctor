import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import Auth from "../Firbase/Firbase-confiq";
const AuthContext = createContext(null)
const Provider = ({children}) => {
    const [user, setUser] = useState([])
    const [lodding, setLodding] = useState(false)
    const Register = (email, password) => {
        setLodding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const login = (email, password) => {
        setLodding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logOut = () => {
        setLodding(true)
        return signOut(Auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(Auth, currenUser => {
            console.log(currenUser)
            setUser(currenUser)
            setLodding(false)
        })
        return () => {
            return unSubcribe
        }
    }, [])
    const AuthInfo = {
        Register,
        login,
        logOut,
        user,
        lodding
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;