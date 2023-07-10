import './pageAboutPreFooter.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function PageAboutPreFooter(){
    const { translations } = useContext(LanguageContext);

    const dvdImg = {img : require('../../images/DVD_logo.png')}

    return(
        <div className='page_about_prefooter'>
            <div className='page_about_prefooter_box'>
                <h3 className='page_about_prefooter_box-title'>{translations.aboutBottomTittle}</h3>
                <p className='page_about_prefooter_box-text'>
                    {translations.aboutBottomText}
                </p>
            </div>
            <div className='dvd_animation_box'>
                <img src={dvdImg.img} alt="DVD"/>
            </div>

        </div>
    )

}