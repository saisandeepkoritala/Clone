import sai from "../sai.png";
import {HiUserGroup} from "react-icons/hi";
const LeftSide=()=>{
    return(
        <>
            <div className="full">
                <div className="outer">
                    <div className="inner1">
                        <img src={sai} alt="" />
                        <h2 style={{color:"red"}}>Sai Sandeep Koritala</h2>
                        <p>Front-End-Developer</p>
                        <p>React.Js||Redux||ReduxToolKit</p>
                        <p>M.S in C.S</p>
                    </div>
                    <div className="inner2">
                        <div className="inner2-in">
                            <p>Profile viewers</p>
                            <p>Connections </p>
                            <p>Connect with alumni</p>
                        </div>
                        <div className="inner2-out">
                            <p>80</p>
                            <p>52</p>
                        </div>
                    </div>
                    <div className="inner3">
                        <p>
                            Access exclusive tools & insights
                        </p>
                        <p>
                            My items
                        </p>
                    </div>
                </div>
                <div className="less">
                    <div className="inner4">
                        <p className="blue">Recent</p>
                        <p><HiUserGroup/>Angular,React,VueJs,NodeJs....</p>
                        <p><HiUserGroup/>React Developers-ReactJs....</p>
                        <p><HiUserGroup/>ReactJs - Devs</p>
                        <p><HiUserGroup/>Machine Learning Community</p>
                        <p><HiUserGroup/>User Experience Design (UX)</p>
                    </div>
                    <div className="inner5">
                        <p className="blue">Groups</p>
                        <p><HiUserGroup/>Python Groups</p>
                        <p><HiUserGroup/>Developers-Roadmap Group</p>
                        <p><HiUserGroup/>React</p>
                        <p>Show More....</p>
                    </div>
                    <div className="inner6">
                        <p>Events</p>
                    </div>
                    <div className="inner7"> 
                        <p>Followed Hashtags</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LeftSide;