import MainAboutPartners from "../MainAboutPartners/MainAboutPartners";
import MainAboutTop from "../MainAboutTop/MainAboutTop";
import './main_about.css';
import MainAboutBottom from "../MainAboutBottom/MainAboutBottom";
export default function MainAbout(){
    return(
        <div className='main_about'>
            <MainAboutPartners/>
            <div>
                <MainAboutTop/>
                <MainAboutBottom/>
            </div>
        </div>
    )
}