import {useContext} from "react";
import LanguageContext from "../../LanguageContext/LanguageContext";
import './previewInfo.css';

export default function PrepeviewInfo(){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='pre_preview_info'>
                <div className='pre_preview_info_box'>
                    <h3 className='pre_preview_info_title'>{translations.preReviewInfoTitle}</h3>
                    <p className='pre_preview_info_text'>{translations.preReviewInfoText}</p>
                </div>
        </div>
    )
}