import {BsBookmark,BsBell} from "react-icons/bs";
import {TiTick} from "react-icons/ti";
import {IoDocumentsOutline,IoDocumentSharp} from "react-icons/io5"
import {AiOutlineYoutube} from "react-icons/ai";
import {FiSettings,FiEdit2} from "react-icons/fi";
import JobsPage from "./JobsPage";
const Jobs=()=>{
    return <div className="jobs">
        <div className="left">
            <div>
                <BsBookmark size="25"/>
                <h1>My Jobs</h1>
            </div>
            <div>
                <BsBell  size="25"/>
                <h1>Job Alerts</h1>
            </div>
            <div>
                <TiTick  size="25"/>
                <h1>Demonstrate Skills</h1>
            </div>
            <div>
                <IoDocumentsOutline  size="25"/>
                <h1>Interview Prep</h1>
            </div>
            <div>
                <IoDocumentSharp size="25"/>
                <h1>Resume Builder</h1>
            </div>
            <div>
                <AiOutlineYoutube size="25"/>
                <h1>Job Seeker guidance</h1>
            </div>
            <div>
                <FiSettings size="25"/>
                <h1>Application Settings</h1>
            </div>
            <div className="last">
            <FiEdit2 size="25"/>Post a free job
            </div>
        </div>

        <div className="middle" >
            <h2>Recommended for you</h2>
            <p>Based on your profile and search history</p>
            <JobsPage/>
        </div>
        <div className="right">
            <div>
                <h1>Job seeker guidance</h1>
                <h2>
                * Recommended based on your activity 
                </h2>
                <p>
                Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.Show more

                </p>
            </div>
        </div>
    </div>
};
export default Jobs;

