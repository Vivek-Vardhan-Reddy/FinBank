import React,{useState} from "react";
import {login} from "../services/authService";
import {useNavigate} from "react-router-dom";

function Login(){

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{
    e.preventDefault();

    try{

        const res = await login(email,password);

        localStorage.setItem("loggedIn","true");
        localStorage.setItem("user", JSON.stringify(res.data));

        navigate(`/dashboard/${res.data.id}`);

    }
    catch(error){

            alert("Invalid Credentials");

    }

}

return(

    <div className="container mt-5">

    <div className="row justify-content-center">

    <div className="col-md-4">

    <div className="card">

    <div className="card-body">

    <h3 className="text-center mb-3">Login</h3>

    <form onSubmit={handleSubmit}>

        <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">
            Login
        </button>

    </form>

    </div>
    </div>

    </div>

    </div>

    </div>

)

}

export default Login;