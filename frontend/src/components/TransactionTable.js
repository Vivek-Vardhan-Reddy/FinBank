import React from "react";

function TransactionTable({transactions}){

    return(

        <table className="table table-striped">

        <thead className="table-dark">

            <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>From Account</th>
            <th>To Account</th>
            </tr>

        </thead>

        <tbody>

            {transactions.map(t=>(
            <tr key={t.id}>

            <td>{t.id}</td>

            <td>{t.type}</td>

            <td>₹{t.amount}</td>

            <td>{t.fromAccount}</td>

            <td>{t.toAccount}</td>

            </tr>
            ))}

        </tbody>

        </table>

    )

}

export default TransactionTable;