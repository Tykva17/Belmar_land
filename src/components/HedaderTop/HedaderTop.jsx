
import './hedader_top.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";


export default function HedaderTop(){
    const { translations } = useContext(LanguageContext);

    const topArrImg = {
        cirkles : require('../../images/cirkles.png'),
        nonePeace : require('../../images/noun-peace-2188565 1.png'),
        world : require('../../images/world.png'),
        stopx : require('../../images/stopx.png')
    }

    return(
        <div className='hedader_top'>
            <div className='hedader_top_cirkles'>
                <img src={topArrImg.cirkles} alt=""/>
            </div>
            <div className='hedader_top_info'>
                <div className='hedader_top_info_imgs'>
                    <div className='hedader_top_info_imgs_item'><img src={topArrImg.nonePeace} alt=""/></div>
                    <div className='hedader_top_info_imgs_item'><img src={topArrImg.stopx} alt=""/></div>
                    <div className='hedader_top_info_imgs_item'><img src={topArrImg.world} alt=""/></div>
                </div>
                <div className='hedader_top_info_titles'>
                    <h1 className='hedader_top_info_title left'>{translations.mainPageTitle1}</h1>
                    <h1 className='hedader_top_info_title right'>{translations.mainPageTitle2}</h1>
                </div>
            </div>
        </div>
    )
}