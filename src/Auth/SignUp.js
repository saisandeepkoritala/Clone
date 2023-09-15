import {useState,useEffect,useRef} from "react";
import {createUserWithEmailAndPassword,signOut} from "firebase/auth";
import {getAuth} from "firebase/auth";
import app from "../Firebase/FirebaseAuth";
import SignIn from "./SignIn";
const SignUp = () => {
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const[user,setuser]=useState("");
    const auth=getAuth(app);
    const inputref=useRef();
    useEffect(()=>{
        inputref.current.focus();
    },[])

    const handlesignout=async()=>{
        await signOut(auth).then((e)=>{
            setuser("")
            setemail("");
            setpass("")})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(email && pass){
            await createUserWithEmailAndPassword(auth,email,pass).then((res)=>setuser(res.user.email)).catch((err)=>console.log("example@gmail.com",err));
        }
        else{
            alert("Enter Valid Details")
        }
    
    }
        
    if(user){
        return <SignIn/>
        }
    else{
        return (
            <form onSubmit={handleSubmit} className="signup">
                <h1>Create Account</h1>
                <input placeholder="email" type="email" value={email} onChange={(e)=>setemail(e.target.value)} ref={inputref}/>
                <input placeholder="password" type="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
                )
            }
}

export default SignUp;
