import React,{useEffect,useState} from "react";
import {getTransactions} from "../services/transactionService";
import TransactionTable from "../components/TransactionTable";

function Transactions(){

    const [transactions,setTransactions] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{

        async function fetchData(){

        const res = await getTransactions(user.id);
        setTransactions(res.data);

        }

        fetchData();

    },[])

    return(

        <div className="container mt-4">

        <h3>Transaction History</h3>

        <TransactionTable transactions={transactions}/>

        </div>

    )

}

export default Transactions;