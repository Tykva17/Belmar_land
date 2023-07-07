import comp_logo_1 from '../../images/CompanyLogo.png';
import comp_logo_2 from '../../images/CompanyLogo-2.png';
import comp_logo_3 from '../../images/CompanyLogo-3.png';
import comp_logo_4 from '../../images/CompanyLogo-4.png';
import comp_logo_5 from '../../images/CompanyLogo-5.png';
import './mainAboutPartners.css';
import OverflowScrolling from 'react-overflow-scrolling';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function MainAboutPartners({isMobileTitle}){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='main_about_partners'>
            <div className='main_about_partners_title'>
                <h1>
                    {translations.mainPagePartnersTitle}
                </h1>
            </div>
            {isMobileTitle ?
                (<OverflowScrolling className='overflow-scrolling'>
                    <div className='main_about_partners_list_item'><img src={comp_logo_4} alt="1"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_1} alt="2"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_3} alt="3"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_5} alt="4"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_2} alt="4"/></div>
                </OverflowScrolling>)
                    :
                (<div className='main_about_partners_list'>
                    <div className='main_about_partners_list_item'><img src={comp_logo_4} alt="1"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_1} alt="2"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_3} alt="3"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_5} alt="4"/></div>
                    <div className='main_about_partners_list_item'><img src={comp_logo_2} alt="4"/></div>
                </div>)
            }
        </div>
    )
}