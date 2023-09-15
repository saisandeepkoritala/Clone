import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Landing from "./Landing";
import Network from "./Network";
import Jobs from "./Jobs";
import Messaging from "./Messaging";
import Notifications from "./Notifications";
import Me from "./Me";
import ReactDOM from "react-dom";
const Home=({user})=>{
    return ReactDOM.createPortal(
    <div className="home">
        <BrowserRouter>
        <nav className='navbar'>
            <ul className='list'>
            <li>
                <Link to="/">Landing</Link>
            </li>
            <li>
                <Link to="/network">My Network</Link>
            </li>
            <li>
                <Link to="/jobs">Jobs</Link>
            </li>
            <li>
                <Link to="/messaging">Messaging</Link>
            </li>
            <li>
                <Link to="/notifications">Notifications</Link>
            </li>
            <li>
                <Link to="/me">Me</Link>
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