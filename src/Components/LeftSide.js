import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import sai from "../sai.png";
import Modal from "./Modal";

const LeftSide = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const OnClose=()=>{
        setIsModalOpen(false);
    }
    const [Name,SetName]=useState("Sai Sandeep Koritala");
    const [Role,SetRole]=useState("Front-End Developer");
    const [OtherRole,SetOtherRole]=useState("React.js || Redux || Redux Toolkit");
    const [Degree,SetDegree]=useState("M.S in Computer Science");
    return (
        <>
        <div className="user-profile">
            <div className="profile-container">
            <div className="profile-info">
                <img src={sai} alt="" onClick={toggleModal} />
                <h2 className="profile-name">{Name}</h2>
                <p className="profile-role">{Role}</p>
                <p className="profile-skills">{OtherRole}</p>
                <p className="profile-degree">{Degree}</p>
            </div>
            {isModalOpen && <Modal OnClose={OnClose} SetDegree={SetDegree} SetName={SetName} SetOtherRole={SetOtherRole} SetRole={SetRole}/>}
            <div className="profile-stats">
                <div className="profile-stats-inner">
                <p className="stat-label">Profile Viewers</p>
                <p className="stat-label">Connections</p>
                <p className="stat-label">Connect with alumni</p>
                </div>
                <div className="profile-stats-outer">
                <p className="stat-value">80</p>
                <p className="stat-value">52</p>
                </div>
            </div>
            <div className="profile-actions">
                <p>Access Exclusive Tools & Insights</p>
                <p>My Items</p>
            </div>
            </div>
            <div className="profile-details">
            <div className="recent-activities">
                <p className="section-title">Recent</p>
                <p>
                <HiUserGroup /> Angular, React, Vue.js, Node.js....
                </p>
                <p>
                <HiUserGroup /> React Developers - React.js....
                </p>
                <p>
                <HiUserGroup /> React.js - Devs
                </p>
                <p>
                <HiUserGroup /> Machine Learning Community
                </p>
                <p>
                <HiUserGroup /> User Experience Design (UX)
                </p>
            </div>
            <div className="groups">
                <p className="section-title">Groups</p>
                <p>
                <HiUserGroup /> Python Groups
                </p>
                <p>
                <HiUserGroup /> Developers-Roadmap Group
                </p>
                <p>
                <HiUserGroup /> React
                </p>
                <p>Show More....</p>
            </div>
            <div className="events">
                <p>Events</p>
            </div>
            <div className="followed-hashtags">
                <p>Followed Hashtags</p>
            </div>
            </div>
        </div>
        </>
    );
};

export default LeftSide;
