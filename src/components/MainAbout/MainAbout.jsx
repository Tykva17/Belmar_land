import MainAboutPartners from "../MainAboutPartners/MainAboutPartners";
import MainAboutTop from "../MainAboutTop/MainAboutTop";
import './main_about.css';
import MainAboutBottom from "../MainAboutBottom/MainAboutBottom";
import {useEffect, useState} from "react";
export default function MainAbout(){

    const [isMobileTitle , setIsMobileTitle] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)'); // Установите нужный вам медиа-запрос
        const handleResize = (event) => {
            setIsMobileTitle(event.matches);
        };
        mediaQuery.addListener(handleResize);
        setIsMobileTitle(mediaQuery.matches);
        return () => {
            mediaQuery.removeListener(handleResize);
        };
    }, []);

    return(
        <div className='main_about'>
            <MainAboutPartners/>
            <div>
                <MainAboutTop isMobileTitle={isMobileTitle}/>
                <MainAboutBottom isMobileTitle={isMobileTitle}/>
            </div>
        </div>
    )
}