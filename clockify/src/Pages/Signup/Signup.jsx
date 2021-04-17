import React from "react";
import { Link } from "react-router-dom";
import { Signupformdiv, SignupNavdiv, SignupNavdivLogoDiv } from "./Signupcss";
import {v4 as uuid} from 'uuid'
import { useDispatch } from "react-redux";
import { signupuser } from "../../Redux/Signup/action";

const signupinput ={
    signupemail:"",
    signuppassword:"",
    agreeterms: false
}

export const SignupPage = () => {
const dispatch = useDispatch();
const [query,setquery] = React.useState(signupinput);
const handlechange = (e)=>{
    const {name,value,type,checked} = e.target;
    let val = type === "checkbox" ? checked : value;
    setquery({
        ...query,
        [name]:val
    });
};
const splitusername = (value)=>{
    var str = "";
    for(let i =0; i<value.length; i++){
        if(value[i] === "@"){
             break;
        }
        else{
            str += value[i];
        }
    }
     return str;
}
const handlesignup = ()=>{
    if(query.signupemail !== "" && query.signuppassword !== "" && query.agreeterms !== false){
        let payload = {
            signupemail:query.signupemail,
            signuppassword:query.signuppassword,
            agreeterms:true,
            id:uuid(),
            username:splitusername(query.signupemail),
        }
        dispatch(signupuser(payload));
        
        setquery(signupinput);
    }
    else{
        if(query.agreeterms === false){
            alert("Please Agree Terms and Conditions")
        }
        else if (query.signupemail === ""){
            alert("Please Enter Your Email")
        }
        else if(query.signuppassword === ""){
            alert("Please Enter Your Password")
        }
    }
}
    return (
        <>
            <SignupNavdiv>
                <SignupNavdivLogoDiv>
                    <img src="https://clockify.me/assets/images/logo.svg" alt="Clockify Logo" style={{ width: "60%", height: "100%", margin: "5% 0% 0% 30%" }} />
                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>

                </SignupNavdivLogoDiv>
                <SignupNavdivLogoDiv>
                    <h1 style={{ fontSize: "1.8vw", margin: "15% 0% 0% 40%" }}><Link style={{ textDecoration: "none", color: "#5bc7f7" }}>Log In</Link></h1>
                </SignupNavdivLogoDiv>
            </SignupNavdiv>
            <div style={{ margin: "2% 0% 0% 0%" }}>
                <h1 style={{ textAlign: "center", letterSpacing: "1px", color: "#333", fontWeight: "400" }}>Get started with Clockify</h1>
            </div>
            <div style={{ margin: "0% 0% 0% 0%" }}>
                <h3 style={{ textAlign: "center", color: "#666" }}>Create a free account to start tracking time and supercharge your productivity.</h3>
            </div>
            <div style={{ margin: "0% 0% 0% 0%" }}>
                <p style={{ textAlign: "center", color: "#666", fontSize: "1.1vw" }}>No credit card required . Unsubscribe at any time</p>
            </div>
            <Signupformdiv>
                <div style={{ flexBasis: "12%",marginTop:"10%", width:"80%",marginLeft:"10%",marginRight:"10%" }}>
                  <h1 style={{fontSize:"2vw", margin:"0%"}}>Sign Up</h1>
                </div>
                <div style={{ flexBasis: "12%", marginTop:"3%",width:"80%",marginLeft:"10%",marginRight:"10%" }}>
                     <input type="email" name="signupemail" value={query.signupemail} onChange={handlechange} style={{width:"92%",height:"90%",paddingLeft:"5%"}} placeholder="Enter Email" />
                </div>
                <div style={{ flexBasis: "12%",  marginTop:"5%",width:"80%",marginLeft:"10%",marginRight:"10%"  }}>
                <input type="password" name="signuppassword" onChange={handlechange} value={query.signuppassword} style={{width:"92%",height:"90%",paddingLeft:"5%"}} placeholder="Enter Password" />
                </div>
                <div style={{ flexBasis: "12%", marginTop:"1%",width:"80%",marginLeft:"10%",marginRight:"10%", display:"flex"}}>
                    <div style={{flexBasis:"10%", textAlign:"center"}}>
                         <input type="checkbox" name="agreeterms" checked={query.agreeterms} onChange={handlechange} style={{width:"50%",height:"40%",marginTop:"50%"}}/>
                    </div>
                    <div style={{flexBasis:"80%",textAlign:"left"}}>
                        <p style={{marginLeft:"2%"}}>I agree to the <Link style={{textDecoration:"none",color:"#0b6c97",fontWeight:"bold"}}>Terms of Use</Link></p>
                    </div>
                </div>
                <div style={{ flexBasis: "12%",  marginTop:"1%",width:"80%",marginLeft:"10%",marginRight:"10%"}}>
                      <button style={{width:"100%",height:"100%",backgroundColor:"#03a9f4", borderColor:"#03a9f4",color:"#fff", fontSize:"1.1vw", borderRadius:"5px", outline:"none"}} onClick={handlesignup}>CREATE FREE ACCOUNT</button>
                </div>
                <div style={{ flexBasis: "12%", marginTop:"3%",width:"80%",marginLeft:"10%",marginRight:"10%" , textAlign:"center" }}>
                     <h3 style={{margin:"0%", color:"grey",marginTop:"3%"}}>-------------------- OR --------------------</h3>
                </div>
                <div style={{ flexBasis: "12%", marginBottom:"10%", marginTop:"3%",width:"80%",marginLeft:"10%",marginRight:"10%" }}>
                     <button style={{width:"100%",height:"100%",display:"flex",backgroundColor:"#fff", border:"1px solid grey", outline:"none"}}>
                           <div style={{flexBasis:"15%"}}>
                             <img src="https://img-authors.flaticon.com/google.jpg" alt="Google Icon" style={{width:"60%", height:"40%", margin:"10% 0% 0% 0%"}}/>
                           </div>
                           <div style={{flexBasis:"85%"}}>
                             <h5 style={{color:"grey", margin:"4% 0% 0% -10%", fontSize:"1.2vw"}}>Continue With Google</h5>
                           </div>
                     </button>
                </div>
            </Signupformdiv>
        </>
    )
}