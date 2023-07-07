import cirkles from '../../images/cirkles.png';
import nonePeace from '../../images/noun-peace-2188565 1.png';
import world from '../../images/world.png';
import stopx from '../../images/stopx.png';
import './hedader_top.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";


export default function HedaderTop(){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='hedader_top'>
            <div className='hedader_top_cirkles'>
                <img src={cirkles} alt=""/>
            </div>
            <div className='hedader_top_info'>
                <div className='hedader_top_info_imgs'>
                    <div className='hedader_top_info_imgs_item'><img src={nonePeace} alt=""/></div>
                    <div className='hedader_top_info_imgs_item'><img src={stopx} alt=""/></div>
                    <div className='hedader_top_info_imgs_item'><img src={world} alt=""/></div>
                </div>
                <div className='hedader_top_info_titles'>
                    <h1 className='hedader_top_info_title left'>{translations.mainPageTitle1}</h1>
                    <h1 className='hedader_top_info_title right'>{translations.mainPageTitle2}</h1>
                </div>
            </div>
        </div>
    )
}