import React, { useState } from "react";
import axios from "axios";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async (e) => {

    e.preventDefault();

    try{

        await axios.post("http://localhost:8080/register",{
        name,
        email,
        password
        });

        alert("User Registered Successfully");

    }catch(error){

        alert("Registration Failed");

    }

}

    return(

        <div className="container mt-5">

        <div className="row justify-content-center">

        <div className="col-md-4">

        <div className="card">

        <div className="card-body">

        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleSubmit}>

            <input
            className="form-control mb-3"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
            />

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

            <button className="btn btn-success w-100">
            Register
            </button>

        </form>

        </div>
        </div>

        </div>

        </div>

        </div>

    )

}

export default Register;