import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(){

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);

useEffect(() => {

    const loggedIn = localStorage.getItem("loggedIn");
    const userData = JSON.parse(localStorage.getItem("user"));

    if(loggedIn){
    setIsLoggedIn(true);
    setUser(userData);
    }

}, []);

const logout = () => {

    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUser(null);

    window.location.href="/";

};

return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <div className="container">

    <Link className="navbar-brand" to="/">FinBank </Link>

    <div>

    {!isLoggedIn && (
    <>
    <Link className="btn btn-outline-light me-2" to="/">Login</Link>

    <Link className="btn btn-outline-light me-2" to="/register">Register</Link>
    </>
    )}

    {isLoggedIn && (
        <>
        <Link className="btn btn-outline-light me-2" to={`/dashboard/${user?.id}`}>Dashboard</Link>

        <Link className="btn btn-outline-light me-2" to="/transfer">Transfer</Link>

        <Link className="btn btn-outline-light me-2" to="/transactions">Transactions</Link>

        <Link className="btn btn-outline-light me-2" to={`/balance/${user?.id}`}>Check Balance</Link>

        <button className="btn btn-danger" onClick={logout}>
            Logout
        </button>
        </>
    )}

    </div>

    </div>

    </nav>

)

}

export default Navbar;