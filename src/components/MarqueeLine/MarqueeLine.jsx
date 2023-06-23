import Marquee from "react-fast-marquee";
import './marquee_box.css';
export default function MarqueeLine(){

    return(
        <div className="marquee_box">
            <Marquee className="marquee_line" autoFill={true} pauseOnHover={true}>
               <p className='marquee_line_text'>Here can be your reklama)</p>
            </Marquee>
        </div>
    )
}