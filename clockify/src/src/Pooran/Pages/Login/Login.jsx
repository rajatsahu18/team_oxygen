import React from 'react';
import { Loginformdiv, LoginNavdiv, LoginNavdivLogoDiv } from './Logincss';
import { Link } from "react-router-dom"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser } from '../../Redux/Login/action';
import { Loader } from '../Loader/Loader';

const logininput = {
  loginemail:"",
  loginpassword:"",
  stay:false
}; 

export const LoginPage = () => {
const [query,setquery] = React.useState(logininput);
const dispatch = useDispatch();
const {loginLoading} = useSelector(state=>state.login)
const handlechangelogin = (e)=>{
    const {name,value,type,checked} = e.target;
    let val = type === "checkbox" ? checked : value;

    setquery({
        ...query,
        [name]: val
    })
}

const handlelogin = ()=>{
    if(query.loginemail !== "" && query.loginpassword !== ""){
          let payload = {
              email:query.loginemail,
              password:query.loginpassword,
              stay:query.stay
          }
          dispatch(loginuser(payload));
          setquery(logininput);
    }
    else{
        if(query.loginemail === ""){
            alert("Please Enter Email")
        }
        else if(query.loginpassword === ""){
            alert("Please Enter Password");
        }
    }
}
if(loginLoading){
    return <Loader/>
}
    return (
        <>
            <LoginNavdiv>
                <LoginNavdivLogoDiv>
                <Link to={`/`} style={{ textDecoration: "none" }}>
                    <img src="https://clockify.me/assets/images/logo.svg" alt="Clockify Logo" style={{ width: "60%", height: "100%", margin: "5% 0% 0% 30%" }} />
                    </Link>
                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>

                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>

                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>
                    <h1 style={{ fontSize: "1.3vw", margin: "17% 0% 0% 32%", color: "grey" }}>Dont have an Account?</h1>
                </LoginNavdivLogoDiv>
                <LoginNavdivLogoDiv>
            
                    <h1 style={{ fontSize: "1.8vw", margin: "15% 0% 0% 0%" }}><Link to={`/signup`}   style={{ textDecoration: "none", color: "#5bc7f7" }}>Sign Up</Link></h1>
                    
                </LoginNavdivLogoDiv>
            </LoginNavdiv>
            <Loginformdiv>
                <div style={{ flexBasis: "12%", marginTop: "10%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <h1 style={{ fontSize: "2vw", margin: "0%" }}>Log in</h1>
                </div>
                <div style={{ flexBasis: "12%", marginTop: "3%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <input type="email" name="loginemail" value={query.loginemail} onChange={handlechangelogin} style={{ width: "92%", height: "90%", paddingLeft: "5%" }} placeholder="Enter Email" />
                </div>
                <div style={{ flexBasis: "12%", marginTop: "5%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <input type="password" name="loginpassword" onChange={handlechangelogin} value={query.loginpassword} style={{ width: "92%", height: "90%", paddingLeft: "5%" }} placeholder="Enter Password" />
                </div>
                <div style={{ flexBasis: "12%", marginTop: "1%", width: "80%", marginLeft: "10%", marginRight: "10%", display: "flex" }}>
                    <div style={{ flexBasis: "10%", textAlign: "center" }}>
                        <input type="checkbox" name="stay" onChange={handlechangelogin} checked={query.stay} style={{ width: "50%", height: "40%", marginTop: "50%" }} />
                    </div>
                    <div style={{ flexBasis: "80%", textAlign: "left" }}>
                        <p style={{ marginLeft: "2%", color: "#0b6c97", fontWeight: "bold" }}> Stay Logged in</p>
                    </div>
                </div>
                <div style={{ flexBasis: "12%", marginTop: "1%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <button style={{ width: "100%", height: "100%", backgroundColor: "#03a9f4", borderColor: "#03a9f4", color: "#fff", fontSize: "1.5vw", borderRadius: "5px", outline: "none" }} onClick={handlelogin}>LOG IN</button>
                </div>
                <div style={{ flexBasis: "12%", marginTop: "3%", width: "80%", marginLeft: "10%", marginRight: "10%", textAlign: "center" }}>
                    <h3 style={{ margin: "0%", color: "grey", marginTop: "3%" }}>-------------------- OR --------------------</h3>
                </div>
                <div style={{ flexBasis: "12%", marginBottom: "10%", marginTop: "3%", width: "80%", marginLeft: "10%", marginRight: "10%" }}>
                    <button style={{ width: "100%", height: "100%", display: "flex", backgroundColor: "#fff", border: "1px solid grey", outline: "none" }}>
                        <div style={{ flexBasis: "15%" }}>
                            <img src="https://img-authors.flaticon.com/google.jpg" alt="Google Icon" style={{ width: "60%", height: "40%", margin: "10% 0% 0% 0%" }} />
                        </div>
                        <div style={{ flexBasis: "85%" }}>
                            <h5 style={{ color: "grey", margin: "4% 0% 0% -10%", fontSize: "1.2vw" }}>Continue With Google</h5>
                        </div>
                    </button>
                </div>
            </Loginformdiv>
        </>
    )
}

