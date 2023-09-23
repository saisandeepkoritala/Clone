import {BsThreeDots} from "react-icons/bs";
import {AiOutlineEdit,AiOutlineUser,AiOutlineSearch} from "react-icons/ai";
const Messaging=()=>{
    return <div className="message">
        <div className="left">
            <div>
                <h1>Messaging</h1>
                <BsThreeDots/>
                <AiOutlineEdit/>
            </div>
            <div>
                <AiOutlineSearch/>
                <input />
            </div>
            <div className="details">
                <h1>Focused</h1>
                <h1>Other</h1>
            </div>
            <div className="user">
                <AiOutlineUser size="30"/>
                <h1>Ramana Munnagala</h1>
                <h1>Infosys System Enginner</h1>
            </div>
            <div className="user">
                <AiOutlineUser size="30"/>
                <h1>John Mullek</h1>
                <h1>Eco Lobs</h1>
            </div>
            <div className="user">
                <AiOutlineUser size="30"/>
                <h1>Elon Musk</h1>
                <h1>Tata Consultancy Systems</h1>
            </div>
            <div className="user">
                <AiOutlineUser size="30"/>
                <h1>Dathu Naik</h1>
                <h1>Finol Enginner</h1>
            </div>
        </div>
        <div className="middle">
            <h1>Linkedin Member</h1>
            <AiOutlineUser size="30"/>
            <div>
                <p>
                Hi, Sai Sandeep!
                </p>
                <p>
                Thanks for being active on LinkedIn. Would you like to hear more about LinkedIn Sales Navigator, the best version of LinkedIn for sales professionals?
                </p>
                <p>
                Sign up now and watch a free demo!
                </p>
                <button>
                    Yes, I want a free demo
                </button>
                <button>
                    I'd like to learn more
                </button>
                <button>
                    May be later
                </button>
            </div>
        </div>
        <div className="right">
            <img src="https://media.licdn.com/dms/image/D5610AQFvtGkKCTaNUQ/image-shrink_1280/0/1687435733740?e=1696104000&v=beta&t=s70gWa6ZIvIZLbn_ilJAEOtTsvSVAmsDP3fsVjNmHpw" alt=""/>
            <div className="credits">
                    <p>About</p>
                    <p className="blue">Accessbility</p>
                    <p>Help Center</p>
                    <p>Privacy & Terms</p>
                    <p className="blue">Ad Choices</p>
                    <p>Adversting</p>
                    <p>Bussiness Services</p>
                    <p>Get the Linkedin</p>
                    <p className="blue">More</p>
                </div>
        </div>
    </div>
};
export default Messaging;