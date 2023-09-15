import sai from "../sai.png"
import {useState,useEffect,useRef } from "react";
import {AiOutlineSend,AiOutlineUser,AiOutlineLike, AiOutlineComment, AiOutlineShareAlt} from "react-icons/ai";
import {addDoc} from "firebase/firestore";
import app from "../Firebase/FirebaseAuth";
import {getFirestore,collection,onSnapshot,serverTimestamp,updateDoc,doc} from "@firebase/firestore";
const MiddleSide = ({user}) => {
    const[post,Setpost]=useState("");
    const[data,Setdata]=useState([]);
    const db=getFirestore(app);
    const inputref=useRef();
    
    useEffect(() => {
        inputref.current.focus();
        const usersCollectionRef = collection(db, 'users');
        onSnapshot(usersCollectionRef, (snapshot) => {
        const usersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }))
        usersData.sort((a, b) =>b.data.time - a.data.time);
        Setdata(usersData);
    
        })
    },[])  
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const ref=collection(db,"users");
        if(post){
            await addDoc(ref,{
                email:user,
                message:post,
                like:0,
                time:serverTimestamp()
            }).then(()=>{
                Setpost("")
            }).catch((err)=>console.log("error",err))
        }   
    }
    const handleLike=async(id,like)=>{
        
        const userdoc=doc(db,"users",id);
        const newFields={like:like+1};
        await updateDoc(userdoc,newFields).then(()=>{console.log("success")
        }).catch((err)=>console.log("error",err))

    }
    console.log(data)
    const rendered=data.map((post)=>{
        return <div key={post.id} className="posts">
            <div>
                <AiOutlineUser size="30"  color="blue" className="user"/>
                <p>{post.data.email}</p>
            </div>
            <p>{post.data.message}</p>
            <div className="btns">
                <div>
                    <p>Like</p><AiOutlineLike size="30" color="blue" onClick={()=>handleLike(post.id,parseInt(post.data.like))}/>
                </div>
                <div>
                    <p>Comment</p><AiOutlineComment color="red" size="30"/>
                </div>
                <div>
                    <p>Share</p><AiOutlineShareAlt color="orange" size="30"/>
                </div>
                <div>
                    <p>Send</p><AiOutlineSend color="green" size="30"/>
                </div>
            </div>
        </div>
    })
return (
    <div className="middle">
        <form onSubmit={handleSubmit}>
            <div className="post">
                <img src={sai} alt="" />
                <input  ref={inputref}value={post} onChange={(e)=>Setpost(e.target.value)} placeholder=" Start a post..."/>
                <AiOutlineSend size="35" onClick={handleSubmit}> Post </AiOutlineSend>
            </div>
        </form>
        {rendered}
    </div>
)
}

export default MiddleSide;
