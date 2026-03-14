import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CheckBalance(){

    const { id } = useParams();
    const [balance,setBalance] = useState(0);

    useEffect(()=>{

        async function fetchBalance(){

            const res = await axios.get(`http://localhost:8080/balance/${id}`);

            setBalance(res.data);

        }

        fetchBalance();

    },[id]);

    return(

        <div className="container mt-4">

        <h3>Your Account Balance</h3>

        <div className="card mt-3 p-4">

        <h4>₹ {balance}</h4>

        </div>

        </div>

    )

}

export default CheckBalance;