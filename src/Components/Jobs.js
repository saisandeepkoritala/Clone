import {BsBookmark,BsBell} from "react-icons/bs";
import {TiTick} from "react-icons/ti";
import {IoDocumentsOutline,IoDocumentSharp} from "react-icons/io5"
import {AiOutlineYoutube} from "react-icons/ai";
import {FiSettings} from "react-icons/fi";
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
            <button>Post a free job</button>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
};
export default Jobs;