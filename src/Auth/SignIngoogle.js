
import Home from "../Components/Home"
import { GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";
import {getAuth} from "firebase/auth";
import {useState} from "react";
import app from "../Firebase/FirebaseAuth";

function SignIngoogle() {
    const auth=getAuth(app);
    const[user,setuser]=useState("");

    
    const handleGoogle=async(e)=>{
        e.preventDefault();
        const provider= await new GoogleAuthProvider();
        return signInWithPopup(auth,provider).then((result)=>setuser(result.user.email))
        .catch(()=>console.log("error"))
}

const handleSignOut=async(e)=>{
    await signOut(auth).then(()=>setuser("")).catch(()=>console.log("error"))

}

if(user){
    return <Home user={user}/>
}
return (
    <>
    {user ?"":<button className="google" onClick={handleGoogle}>Sign With Google </button>}
    </>
)
}

export default SignIngoogle;

//end


