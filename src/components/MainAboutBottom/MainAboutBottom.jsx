import './main_about_bottom.css'
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function MainAboutBottom({isMobileTitle}){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='main_about_bottom'>
            <div className='main_about_bottom_box-left'>
                <h3 className="main_about_bottom_box_title">
                    {translations.mainPagePartnersMainSubTitle}
                </h3>
                {isMobileTitle ? false :
                (<span className="main_about_bottom_link">
                    {translations.mainPagePartnersMainMoreBtn}
                </span>)}
            </div>
            <div className='main_about_bottom_box-right'>
                <p>
                    {translations.mainPagePartnersMainText}
                </p>
                {isMobileTitle ?
                    (<span className="main_about_bottom_link">
                    {translations.mainPagePartnersMainMoreBtn}
                </span>) : false }
            </div>
        </div>
    )
}