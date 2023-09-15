import LeftSide from "./LeftSide"; 
import MiddleSide from "./MiddleSide";
import RightSide from "./RightSide";
const Landing=({user})=>{
    return (
    <div className="landing">
        <div className="landing-left">
            <LeftSide/>
        </div>
        <div className="landing-center">
            <MiddleSide user={user}/>
        </div>
        <div className="landing-right">
            <RightSide />
        </div>
    </div>
    )
};
export default Landing;