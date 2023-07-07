import xLines from '../../images/x-lines.png';
import './pageAboutMainInfo.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function PageAboutMainInfo(){
    const { translations } = useContext(LanguageContext);

    return(<div className='page_about_main_info'>
                <div className='page_about_main_info_title-box'>
                    <h2 className='page_about_main_info_title'>
                        {translations.aboutMainTitle}
                    </h2>
                </div>
                <div className='page_about_main_info_text-box'>
                    <div className='page_about_main_info_img-box'>
                        <img src={xLines} alt="x" className='page_about_main_info_img'/>
                    </div>
                    <div className='page_about_main_info_text-item'>
                        <p className='page_about_main_info_text'>
                            {translations.aboutMainText}
                        </p>
                    </div>
                </div>
    </div>)

}