import comp_logo_1 from '../../images/CompanyLogo.png';
import comp_logo_2 from '../../images/CompanyLogo-2.png';
import comp_logo_3 from '../../images/CompanyLogo-3.png';
import comp_logo_4 from '../../images/CompanyLogo-4.png';
import './mainAboutPartners.css';
export default function MainAboutPartners(){

    return(
        <div className='main_about_partners'>
            <div className='main_about_partners_title'>
                <h1>
                    Our partners
                </h1>
            </div>
            <div className='main_about_partners_list'>
                <div className='main_about_partners_list_item'><img src={comp_logo_1} alt="1"/></div>
                <div className='main_about_partners_list_item'><img src={comp_logo_2} alt="2"/></div>
                <div className='main_about_partners_list_item'><img src={comp_logo_3} alt="3"/></div>
                <div className='main_about_partners_list_item'><img src={comp_logo_3} alt="4"/></div>
                <div className='main_about_partners_list_item'><img src={comp_logo_4} alt="4"/></div>
            </div>
        </div>
    )
}