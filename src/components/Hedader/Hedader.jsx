import HedaderTop from "../HedaderTop/HedaderTop";
import HedaderToggSide from "../HedaderToggSide/HedaderToggSide";
import HedaderBottom from "../HedaderBottom/HedaderBottom";
import './hedader.css';
export default function Hedader(){
    return(
        <div className='home_hedader'>
            <div>
                <HedaderTop/>
                <HedaderBottom/>
            </div>
            <HedaderToggSide/>
        </div>
    )
}