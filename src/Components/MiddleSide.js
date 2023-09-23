import sai from "../sai.png";
import {useState,useEffect,useRef } from "react";
import {AiOutlineSend,AiOutlineUser,AiOutlineLike, AiOutlineComment, AiOutlineShareAlt} from "react-icons/ai";
import app from "../Firebase/FirebaseAuth";
import {
    collection,
    onSnapshot,
    serverTimestamp,
    updateDoc,
    doc,
    addDoc, 
    } from 'firebase/firestore'; 
import {getFirestore} from "@firebase/firestore";
const MiddleSide = ({user}) => {
    const[post,Setpost]=useState("");
    const[pic,Setpic]=useState("");
    const[type,Settype]=useState("");
    const[Show,SetShow]=useState(false);
    const[data,Setdata]=useState([]);
    const[userLikes, setUserLikes] = useState({});
    const[likes, setLikes] = useState({})
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
                url:pic,
                comments:[],
                time:serverTimestamp()
            }).then(()=>{
                Setpost("")
                Setpic("")
            }).catch((err)=>console.log("error",err))
        }   
    }
    
    const handleLike = async (id) => {
        // Check if the user has already liked this post
        if (!userLikes[id]) {
            // Update the user's like status for this post
            setUserLikes({ ...userLikes, [id]: true });
    
            // Update the like count in the state
            setLikes({ ...likes, [id]: likes[id] + 1 });
    
            // Update the like count in the database
            const userdoc = doc(db, "users", id);
            const currentLikes = data.find((post) => post.id === id).data.like;
            const newFields = { like: currentLikes + 1 };
            await updateDoc(userdoc, newFields).then(() => {
                console.log("success");
            }).catch((err) => console.log("error", err));
        }
        else{
            setUserLikes({...userLikes,[id]:false});
            setLikes({...likes,[id]:likes[id]-1});
            const userdoc = doc(db, "users", id);
            const currentLikes = data.find((post) => post.id === id).data.like;
            const newFields={like:currentLikes-1};
            await updateDoc(userdoc,newFields).then(() => {
                console.log("success");
            }).catch((err) => console.log("error", err));
        }
    }

    const handleComment=(post)=>{
        if(post.id===Show){
            SetShow(-1);
        }
        else{
            SetShow(post.id)
        }

    }
    const handleSubmitComment=async(post)=>{
        const userdoc = doc(db, "users", post.id);
        const now=data.find((user)=>user.id===post.id)
        now.data.comments.push({type:type,mail:user,time:new Date()});
        console.log(now.data.comments)
        const newFields={comments:now.data.comments};
        await updateDoc(userdoc,newFields).then(()=>{console.log("success")}).catch(()=>console.log("error"))
        
        SetShow(-1);
        Settype("");
    }
    const rendered=data.map((post)=>{

        const rendredcomment = post.data.comments.map((item) => {
            const commentTime = item.time.toDate(); // Convert Firebase Timestamp to JavaScript Date
            const formattedTime = commentTime.toLocaleString(); // Format date and time
            return (
                <div key={item.type} className="commentpost">
                    <div>
                        <p>{item.mail}</p>
                        <p>Posted on {formattedTime}</p> 
                    </div>
                    <h1>{item.type}</h1>
                </div>
            );
        });
        
        
        return <div key={post.id} className="posts">
            <div>
                <AiOutlineUser size="30"  color="blue" className="user"/>
                <p>{post.data.email}</p>
            </div>
            <p>{post.data.message}</p>
            {post.data.url && <img src={post.data.url} alt="" />}
            <div className="btns">
                <div>
                    <p>Like</p><AiOutlineLike size="30" color="blue" onClick={()=>handleLike(post.id)}/>
                    <p>{post.data.like || " "}</p>
                </div>
                <div>
                    <p>Comment</p><AiOutlineComment color="red" size="30" onClick={()=>handleComment(post)}/>
                    { Show===post.id && 
                    <form className="comment">
                        <input value={type} onChange={(e)=>Settype(e.target.value)}/>
                            <div>
                                <AiOutlineSend  size="30" onClick={()=>handleSubmitComment(post) }/>
                            </div>
                        </form>
                    }
                
                </div>
                <div>
                    <p>Share</p><AiOutlineShareAlt color="orange" size="30"/>
                </div>
                <div>
                    <p>Send</p><AiOutlineSend color="green" size="30"/>
                </div>
            </div>
            { Show===post.id && rendredcomment}
        </div>
    })

return (
    <div className="middle">
        <form onSubmit={handleSubmit}>
            <div className="post">
                <img src={sai} alt="" />
                <input  ref={inputref} value={post} onChange={(e)=>Setpost(e.target.value)} placeholder=" Start a post..."/>
                <AiOutlineSend size="35" onClick={handleSubmit}> Post </AiOutlineSend>
            </div>
            <div className="post">
                <input  value={pic} onChange={(e)=>Setpic(e.target.value)} placeholder="Url for pic...(optional)"/>
            </div>
        </form>
        {rendered}
    </div>
)
}

export default MiddleSide;

