import Init from "./initialize.js";
import firebase from "firebase/app";
import "./auth.css";

Init();

const auth = firebase.auth();

function Login() {
    const signInWithGoogle= () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  
    return (
      <div className="login">
        <h1>We require you to sign in for full functionality.</h1><br />
        <button className="btn btn-primary button-login" onClick={signInWithGoogle}>Sign In With Google</button>
        <p></p>
        <p>If you don't want to sign in, we have some info about the app available on the "About" page!</p>
      </div>
    )
}

function Logout() {
    return auth.currentUser && (
      <button className="btn btn-outline-danger" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export { Login, Logout, auth };