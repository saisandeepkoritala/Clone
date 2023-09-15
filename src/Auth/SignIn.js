import { useState, useEffect, useRef } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import SignUp from "./SignUp";
import app from "../Firebase/FirebaseAuth";
import Home from "../Components/Home";

const SignIn = () => {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [user, setuser] = useState("");
    const [createuser, setcreateuser] = useState(false);
    const auth = getAuth(app);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const inputRef = useRef();

    const handlesignout = async () => {
        await signOut(auth).then((e) => {
        setuser("");
        setemail("");
        setpass("");
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && pass) {
        await signInWithEmailAndPassword(auth, email, pass)
            .then((res) => setuser(res.user.email))
            .catch((err) => console.log("error", err));
        } else {
            alert("Enter Valid Details")
        }
    };

    const handleGoogle = async (e) => {
        e.preventDefault();
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        .then((result) => setuser(result.user.email))
        .catch(() => console.log("error"));
    };
    if (user) {
        return <Home user={user}/>;
    } else {
        if (createuser) {
        return <SignUp />;
        }
        return (
        <>
            <form onSubmit={handleSubmit} className="signin">
            <h1>Log into Account</h1>
            <input
                placeholder="example@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                ref={inputRef}
            />
            <input
                placeholder="password"
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
            />
            <button type="submit">Log in</button>
            </form>
            <button className="create" onClick={() => setcreateuser(true)}>
            Sign Up
            </button>
            <button className="google" onClick={handleGoogle}>
            Sign With Google
            </button>
        </>
        );
    }
    };

export default SignIn;
