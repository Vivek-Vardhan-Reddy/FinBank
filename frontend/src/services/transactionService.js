import API from "./api";

export const transferMoney=(data)=>{
return API.post("/transfer",data);
}

export const getTransactions=(accountId)=>{
return API.get(`/transactions/${accountId}`);
}