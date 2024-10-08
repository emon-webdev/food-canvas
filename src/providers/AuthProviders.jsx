import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading()
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(true); // Set loading to true at the start
    
            if (currentUser) {
                // Prepare the user info for the token request
                const userInfo = { email: currentUser.email };
    
                try {
                    const res = await axiosPublic.post('/jwt', userInfo);
                    
                    if (res.data?.token) {
                        localStorage.setItem('access-token', res.data.token);
                    } else {
                        console.error("No token received");
                    }
                } catch (error) {
                    console.error("Failed to fetch token:", error);
                }
            } else {
                // User is signed out, remove the token
                localStorage.removeItem('access-token');
            }
            setLoading(false); // Set loading to false after the process is complete
        });
    
        return () => {
            unsubscribe(); // Clean up the subscription
        };
    }, [axiosPublic]);
    
    
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         if (currentUser) {
    //             // get token and store client
    //             const userInfo = { email: currentUser.email }
    //             axiosPublic.post('/jwt', userInfo)
    //                 .then(res => {
    //                     if (res.data?.token) {
    //                         localStorage.setItem('access-token', res.data.token)
    //                     }
    //                 })
    //         } else {
    //             //TODO: remove token (if token store in client side: local storage , caching , in memory)
    //             localStorage.removeItem('access-token')
    //         }
    //         console.log("current User", currentUser);
    //         setLoading(false)
    //     })
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;