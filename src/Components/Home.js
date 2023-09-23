import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Landing from "./Landing";
import Network from "./Network";
import Jobs from "./Jobs";
import Messaging from "./Messaging";
import Notifications from "./Notifications";
import Me from "./Me";
import ReactDOM from "react-dom";
import {AiOutlineHome,AiOutlineUsergroupAdd,AiOutlineMessage,AiOutlineBell,AiOutlineUserAdd} from "react-icons/ai";
import {FaSuitcaseRolling} from "react-icons/fa";

const Home=({user})=>{
    return ReactDOM.createPortal(
    <div className="home">
        <BrowserRouter>
        <nav className='navbar'>
            <ul className='list'>
            <li>
                <Link to="/"><AiOutlineHome size="30"/></Link>
            </li>
            <li>
                <Link to="/network"><AiOutlineUsergroupAdd size="30"/></Link>
            </li>
            <li>
                <Link to="/jobs"><FaSuitcaseRolling size="30"/></Link>
            </li>
            <li>
                <Link to="/messaging"><AiOutlineMessage size="30"/></Link>
            </li>
            <li>
                <Link to="/notifications"><AiOutlineBell size="30"/></Link>
            </li>
            <li>
                <Link to="/me"><AiOutlineUserAdd size="30"/></Link>
            </li>
            </ul>
        </nav>

    <Routes>
        <Route path="/" element={<Landing user={user}/>} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/me" element={<Me />} />
    </Routes>
    </BrowserRouter>
    </div>,document.querySelector(".portal")
)};



export default Home;