import Marquee from "react-fast-marquee";
import './marquee_box.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function MarqueeLine(){
    const { translations } = useContext(LanguageContext);

    return(
        <div className="marquee_box">
            <Marquee className="marquee_line" autoFill={true} pauseOnHover={true}>
               <p className='marquee_line_text'>{translations.mainMarquee}</p>
            </Marquee>
        </div>
    )
}