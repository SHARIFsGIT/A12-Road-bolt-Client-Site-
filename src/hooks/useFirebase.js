import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken ,
 createUserWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setLoading(false))
    }

        // user info 

        const hanldeUserInfoRegister = (email) => {
            fetch("http://localhost:5000/addUserInfo", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ email }),
            })
              .then((res) => res.json())
              .then((result) => console.log(result));
          };
        
          const handleUserRegister = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
                console.log(result.user);
                hanldeUserInfoRegister(result.user.email);
              })
              .catch((error) => {
                const errorMessage = error.message;
              });
          };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // console.log(user);
    

    return {
        user,
        loading,
        signInUsingGoogle,
        logOut,
        handleUserRegister
    }
}

export default useFirebase;