import ReactDOM from "react-dom";
import { useState } from "react";
const Modal=({OnClose,SetRole,SetOtherRole,SetName,SetDegree})=>{
    const handleClick=()=>{
        OnClose();
    }
    const [name,Setname]=useState("");
    const [role,Setrole]=useState("");
    const [otherRole,SetotherRole]=useState("");
    const [degree,Setdegree]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name && role && otherRole && degree){
            SetName(name);
            SetRole(role);
            SetOtherRole(otherRole);
            SetDegree(degree);
            OnClose();
        }
    }
    return ReactDOM.createPortal(
        <form className="modal-in" onSubmit={handleSubmit}>
            <div className="modal-details">
                <div>
                    <label>Name</label><input value={name} onChange={(e)=>Setname(e.target.value)}/>
                    <label>Role</label><input value={role} onChange={(e)=>Setrole(e.target.value)}/>
                    <label>OtherSkills</label><input value={otherRole} onChange={(e)=>SetotherRole(e.target.value)}/>
                    <label>Degree</label><input value={degree} onChange={(e)=>Setdegree(e.target.value)}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <button className="modal-btn" onClick={handleClick}>Close</button>
            </div>
        </form>, document.querySelector(".modal")
    );
}

export default Modal; 