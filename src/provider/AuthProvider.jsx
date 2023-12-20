// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// import { app } from "../firebase/firebase.config";
// import useAxiosPublic from "../hooks/useAxiosPublic";

// export const AuthContext = createContext(null);

// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();
//     const axiosPublic = useAxiosPublic();

//     // create user
//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password)
//     };

//     // Google Login
//     const googleSignIn = () => {
//         setLoading(true);
//         return signInWithPopup(auth, googleProvider);
//     }

//     // login
//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     // logOut
//     const userSignOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     }

//     // update profile
//     const updateUserProfile = (name, photo) => {
//         return updateProfile(auth.currentUser, {
//             displayName: name, photoURL: photo
//         });
//     }

//     // set current user
//     useEffect(() => {
//         const unSubscribe = onAuthStateChanged(auth, currentUser => {
//             setUser(currentUser);
//             if (currentUser) {
//                 // get token and store client
//                 const userInfo = { email: currentUser.email };
//                 axiosPublic.post('/jwt', userInfo)
//                     .then(res => {
//                         if (res.data.token) {
//                             localStorage.setItem('access-token', res.data.token);
//                             setLoading(false);
//                         }
//                     })
//             }
//             else {
//                 // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
//                 localStorage.removeItem('access-token');
//                 setLoading(false);
//             }

//         });
//         return () => {
//             return unSubscribe();
//         }
//     }, [axiosPublic]);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         userSignOut,
//         updateUserProfile,
//         googleSignIn
//     }

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;