import API from "./api";

export const login=(email,password)=>{
return API.post("/login",{email,password});
}