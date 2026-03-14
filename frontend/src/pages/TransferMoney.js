import React,{useState} from "react";
import {transferMoney} from "../services/transactionService";

function TransferMoney(){

    const user = JSON.parse(localStorage.getItem("user"));

    const [toAccount,setToAccount] = useState("");
    const [amount,setAmount] = useState("");

    const handleSubmit = async(e)=>{

        e.preventDefault();

        if(!toAccount || !amount){
            alert("Please enter account ID and amount");
            return;
        }

        if(user.id === Number(toAccount)){
            alert("You cannot transfer money to your own account");
            return;
        }

        try{

            await transferMoney({
                fromAccount: user.id,
                toAccount: Number(toAccount),
                amount: Number(amount)
            });

            alert("Transfer Successful");

            setToAccount("");
            setAmount("");

        }catch(error){

            alert(error.response?.data || "Transfer Failed");

        }

    }

    return(

        <div className="container mt-4">

        <div className="row justify-content-center">

        <div className="col-md-5">

        <div className="card shadow">

        <div className="card-body">

        <h4 className="mb-3">Transfer Money</h4>

        <form onSubmit={handleSubmit}>

        <div className="mb-3">

        <label className="form-label">To Account ID</label>

        <input
        type="number"
        className="form-control"
        placeholder="Enter Account ID"
        value={toAccount}
        onChange={(e)=>setToAccount(e.target.value)}
        />

        </div>

            <div className="mb-3">

                <label className="form-label">Amount</label>

                <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />

            </div>

            <button className="btn btn-primary w-100">
                Transfer
            </button>

        </form>

        </div>

        </div>

        </div>

        </div>

        </div>

    )

}

export default TransferMoney;