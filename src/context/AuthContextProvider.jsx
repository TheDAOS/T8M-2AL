import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { isLoggedIn } from "../firebase/auth";

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);
    
    // for login and sign up
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        isLoggedIn((userCredential) => setUser(userCredential || null))
    }, [])

    return (
        <AuthContext.Provider value={{
            user, setUser,
            email, setEmail,
            password, setPassword,
        }}>
            {children}
        </AuthContext.Provider>
    );
}