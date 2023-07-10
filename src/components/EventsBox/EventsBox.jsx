import './events.css';
import EventItem from "./EventItem";
import OverflowScrolling from 'react-overflow-scrolling';
import {useContext} from "react";
import LanguageContext from "../../LanguageContext/LanguageContext";
export default function EventsBox(){
    const arrEvent = [
        {
            "title" : "WE'RE GOING TO AFFILIATE WORLD AGAIN!",
            "location" : "Barcelona, Spain",
            "date" : "12-13 July, 2023",
            "img" : require("../../images/IMG_8844.PNG")
        },
        {
            "title" : "WE'RE GLAD TO SEE YOU AT SEMPRO!",
            "location" : "Kyiv, Ukraine",
            "date" : "16 June, 2023",
            "img" : require("../../images/IMG_8837.jpeg")
        },
        {
            "title" : "LOOK FOR AN INCREDIBLE ENCOUNTER WITH YOU AT THE FOREX EXPRO",
            "location" : "Dubai, UAE",
            "date" : "17-18 May, 2023",
            "img" : require("../../images/IMG_8832.jpeg")
        },
        {
            "title" : "READY FOR NEW AND EXCITING INTRODUCTIONS ON AFFHUB!",
            "location" : "Lviv, Ukraine",
            "date" : "7 April, 2023",
            "img" : require("../../images/IMG_8841.PNG")
        },
        {
            "title" : "GLAD TO MEET YOU AT SEMPRO!",
            "location" : "Kyiv, Ukraine",
            "date" : "3 February, 2023",
            "img" : require("../../images/IMG_8838.jpeg")
        },
        {
            "title" : "LET'S MEET AT AFFILIATE WORLD IN ASIA!",
            "location" : "Bangkok, Thailand",
            "date" : "7-8 December, 2023",
            "img" : require("../../images/IMG_8833.PNG")
        }
    ];
    console.log(arrEvent)
    const { translations } = useContext(LanguageContext);

    return(
        <div className='events'>
            <div className='events_header'>
                <h1 className='events_header_title'>{translations.eventsPageTitle}</h1>
                {/*<span className='events_header_link'>see all</span>*/}
            </div>
            <OverflowScrolling className='overflow-scrolling-events events_list'>

                {
                    arrEvent.map(function (item, i) {
                        return (
                            <EventItem key={i} title={arrEvent[i].title} date={arrEvent[i].date} location={arrEvent[i].location} img={arrEvent[i].img}/>
                             )
                    })
                }


            </OverflowScrolling>
        </div>
    )
}