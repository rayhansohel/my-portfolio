import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const handleError = (err) => {
    setError(err.message);
    console.error(`Auth Error: ${err.message}`);
  };

  const signInWithGoogle = async () => {
    setError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);

      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);

      return result.user;
    } catch (err) {
      handleError(err);
    }
  };

  const registerWithEmailPassword = async (email, password, displayName, photoURL) => {
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile with name and photoURL
      await updateProfile(result.user, { displayName, photoURL });
      setUser({ ...result.user, displayName, photoURL });

      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);

      return result.user;
    } catch (err) {
      handleError(err);
      throw err;
    }
  };

  const userLogin = async (email, password) => {
    setError(null);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);

      const idToken = await result.user.getIdToken();
      localStorage.setItem("authToken", idToken);

      return result.user;
    } catch (err) {
      handleError(err);
    }
  };

  const logOut = async () => {
    setError(null);
    try {
      await signOut(auth);
      setUser(null);

      localStorage.removeItem("authToken");
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        currentUser.getIdToken().then((idToken) => {
          localStorage.setItem("authToken", idToken);
        });
      } else {
        localStorage.removeItem("authToken");
      }
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    setUser,
    registerWithEmailPassword,
    userLogin,
    logOut,
    signInWithGoogle,
    error,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
