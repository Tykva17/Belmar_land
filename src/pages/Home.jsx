import Hedader from "../components/Hedader/Hedader";
import MainAbout from "../components/MainAbout/MainAbout";
import MarqueeLine from "../components/MarqueeLine/MarqueeLine";
import Advanteges from "../components/Advanteges/Advanteges";
import ReviewList from "../components/Rewievs/RewievsList";
import EventsBox from "../components/EventsBox/EventsBox";
import Preloader from "../components/Preloader/Preloader";
import {useEffect, useState} from "react";
import PrepeviewInfo from "../components/PrereviewInfo/PrepeviewInfo";


export default function Home(){

    const [showPreloader, setShowPreloader] = useState(false);

    useEffect(()=> {
        const isShownInLocalStorage = localStorage.getItem('isShown');

        if (isShownInLocalStorage) {
            console.log('1',isShownInLocalStorage)
            setShowPreloader(true); // Встановлюємо стан, якщо значення існує в localStorage
        } else {
            console.log('2',isShownInLocalStorage)
            setShowPreloader(true); // Встановлюємо стан, щоб показати елемент
            localStorage.setItem('isShown', false); // Зберігаємо значення в localStorage
        }
    },[])


    return (
        <>
            { showPreloader ? <Preloader/> : null}
            <Hedader/>
            <MainAbout/>
            <MarqueeLine/>
            <Advanteges/>
            <PrepeviewInfo/>
            <ReviewList/>
            <EventsBox/>
        </>
    )
}