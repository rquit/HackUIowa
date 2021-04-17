import "./navbar.css";
import { Logout, Login } from "./auth.js";
import { auth } from "./auth.js";
import { useAuthState } from "react-firebase-hooks/auth";

// one of the default bootstrap navbars
export default function Navbar() {
    const [ user ] = useAuthState(auth);
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <a className="navbar-brand" href="/">Goals</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tips">Tips</a>
                    </li>
                </ul>
                {user ? <Logout /> : <Login />}
            </div>
        </nav>
    )
}
