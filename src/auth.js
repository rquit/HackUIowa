import Init from "./initialize.js";
import firebase from "firebase/app";

Init();

const auth = firebase.auth();

function Login() {
    const signInWithGoogle= () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  
    return (
      <>
      <h1>You must be logged in to access this page.</h1><br />
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      </>
    )
}

function Logout() {
    return auth.currentUser && (
      <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export { Login, Logout, auth };