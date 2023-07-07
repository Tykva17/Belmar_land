import "./hedader_bottom.css";
import scode from '../../images/s_code.png';
import gradient from '../../images/gradient.png';
import circle_text from '../../images/circle_text.png';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function HedaderBottom(){
    const { translations } = useContext(LanguageContext);


    return(
        <div className='hedader_bottom'>
            <div className='hedader_bottom_info'>
                <div className='hedader_bottom_info_box'>
                    <p className='hedader_bottom_info_box_text'>
                        {translations.mainPageSubtitle}
                    </p>
                </div>
                <div className='hedader_bottom_info_circle_text'>
                    <img src={circle_text} alt=""/>
                </div>
                <div className='hedader_bottom_info_box year'>
                    <span>
                        since 2022
                    </span>
                </div>
            </div>
            <div className='hedader_bottom_shin'>
                <img src={gradient} alt=""/>
            </div>
            <div className='hedader_bottom_scode'>
                <img src={scode} alt=""/>
            </div>

        </div>
    )
}