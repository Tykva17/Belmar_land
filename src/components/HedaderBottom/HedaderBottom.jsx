import "./hedader_bottom.css";
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function HedaderBottom(){
    const { translations } = useContext(LanguageContext);

    let imgArr = {
        imgCircle : require('../../images/circle_text.png'),
        imgGradient : require('../../images/gradient.png'),
        imgScode : require('../../images/s_code.png'),
    }

    return(
        <div className='hedader_bottom'>
            <div className='hedader_bottom_info'>
                <div className='hedader_bottom_info_box'>
                    <p className='hedader_bottom_info_box_text'>
                        {translations.mainPageSubtitle}
                    </p>
                </div>
                <div className='hedader_bottom_info_circle_text'>
                    <img src={imgArr.imgCircle} alt="#"/>
                </div>
                <div className='hedader_bottom_info_box year'>
                    <span>
                        since 2022
                    </span>
                </div>
            </div>
            <div className='hedader_bottom_shin'>
                <img src={imgArr.imgGradient} alt="#"/>
            </div>
            <div className='hedader_bottom_scode'>
                <img src={imgArr.imgScode} alt="#"/>
            </div>

        </div>
    )
}