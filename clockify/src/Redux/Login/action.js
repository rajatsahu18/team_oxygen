import axios from "axios";
import { Savelocaldata } from "../../Utils/localstorage";
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype";




export const loginsuccess = (payload)=>({
 type:LOGIN_SUCCESS,
 payload
});

export const loginrequest = ()=>({
type:LOGIN_REQUEST
});

export const loginfailed = ()=>({
type:LOGIN_FAILED
});


export const loginuser = (payload)=>(dispatch)=>{
    dispatch(loginrequest());
    const config = {
        url:"https://json-server-mocker-pooran.herokuapp.com/logindata",
        method:"get",
        params:{
           email:payload.email,
           password:payload.password
        }
    }
    axios(config).then(res=>{
        if(res.data.length === 0){
            alert("Email or Password Wrong");
            dispatch(loginfailed());
        }
        else if(res.data.length > 0){
            let data = res.data[0];
            dispatch(loginsuccess(data));
            if(payload.stay === true){
                let localdata = {
                    email:payload.email,
                    password:payload.password,
                    loginAuth:true,
                    id:data.id,
                    username:data.username
                }
                Savelocaldata("account",localdata);
            }
            alert("You Have Succesfully logged in");
        }
    }).catch(err=>{
        dispatch(loginfailed());
    })
}