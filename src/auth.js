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
      <div className="login">
        <button className="btn btn-primary button-login" onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    )
}

function Logout() {
    return auth.currentUser && (
      <button className="btn btn-outline-danger" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export { Login, Logout, auth };