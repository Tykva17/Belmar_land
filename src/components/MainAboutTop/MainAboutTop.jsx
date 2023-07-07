import './MainAboutTop.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function MainAboutTop ({isMobileTitle}){

    const { translations } = useContext(LanguageContext);

    return(
        <div className='main_about_top'>
            <div className='main_about_top_title'>
                <h1>
                    {translations.mainPagePartnersMainTitle[0]} <br/>
                    <span className='pink_title'>{translations.mainPagePartnersMainTitle[1]}</span> <br/>
                    {translations.mainPagePartnersMainTitle[2]}
                </h1>)

            </div>
        </div>
    )
}