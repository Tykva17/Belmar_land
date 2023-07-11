import './main_about_bottom.css'
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

export default function MainAboutBottom({isMobileTitle}){
    const { translations } = useContext(LanguageContext);
    const navigate = useNavigate();

    const handleAlbumClick = (page) => {
        navigate(`/${page}`);
    };

    return(
        <div className='main_about_bottom'>
            <div className='main_about_bottom_box-left'>
                <h3 className="main_about_bottom_box_title">
                    {translations.mainPagePartnersMainSubTitle}
                </h3>
                {isMobileTitle ? false :
                (<span onClick={() => handleAlbumClick('about_us')} className="main_about_bottom_link">
                    {translations.mainPagePartnersMainMoreBtn}
                </span>)}
            </div>
            <div className='main_about_bottom_box-right'>
                <p>
                    {translations.mainPagePartnersMainText}
                </p>
                {isMobileTitle ?
                    (<span onClick={() => handleAlbumClick('about_us')} className="main_about_bottom_link">
                    {translations.mainPagePartnersMainMoreBtn}
                </span>) : false }
            </div>
        </div>
    )
}