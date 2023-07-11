import './events.css';
import EventItem from "./EventItem";
import OverflowScrolling from 'react-overflow-scrolling';
import {useContext, useEffect, useState} from "react";
import LanguageContext from "../../LanguageContext/LanguageContext";
import Slider from "react-slick";
export default function EventsBox(){
    const { translations } = useContext(LanguageContext);

    const arrEvent = [
        {
            "title" : translations.eventsList[0].title,
            "location" : translations.eventsList[0].location,
            "date" : translations.eventsList[0].date,
            "img" : require("../../images/IMG_8844.PNG")
        },
        {
            "title" : translations.eventsList[1].title,
            "location" : translations.eventsList[1].location,
            "date" : translations.eventsList[1].date,
            "img" : require("../../images/IMG_8837.jpeg")
        },
        {
            "title" : translations.eventsList[2].title,
            "location" : translations.eventsList[2].location,
            "date" : translations.eventsList[2].date,
            "img" : require("../../images/IMG_8832.jpeg")
        },
        {
            "title" : translations.eventsList[3].title,
            "location" : translations.eventsList[3].location,
            "date" : translations.eventsList[3].date,
            "img" : require("../../images/IMG_8841.PNG")
        },
        {
            "title" : translations.eventsList[4].title,
            "location" : translations.eventsList[4].location,
            "date" : translations.eventsList[4].date,
            "img" : require("../../images/IMG_8838.jpeg")
        },
        {
            "title" : translations.eventsList[5].title,
            "location" : translations.eventsList[5].location,
            "date" : translations.eventsList[5].date,
            "img" : require("../../images/IMG_8833.PNG")
        }
    ];
    const imgAdvImages = {
        arrow: require('../../images/material-symbols_line-end-arrow-outline.png')
    }

    const [isMobile , setIsMobile] = useState(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)'); // Установите нужный вам медиа-запрос
        const handleResize = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addListener(handleResize);
        setIsMobile(mediaQuery.matches);
        return () => {
            mediaQuery.removeListener(handleResize);
        };

    }, [isMobile]);

    const CustomNextArrow = (props) => (
        <button className="event_link" onClick={props.onClick}>
            <img src={imgAdvImages.arrow} alt="->"/>
        </button>
    );
    const CustomPrevArrow = (props) => (
        <button className="event_link prev_arrow" onClick={props.onClick}>
            <img src={imgAdvImages.arrow} alt="->"/>
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow : <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow />
    };



    return(
        <div className='events'>
            <div className='events_header'>
                <h1 className='events_header_title'>{translations.eventsPageTitle}</h1>
                {/*<span className='events_header_link'>see all</span>*/}
            </div>
            {
                isMobile ?
                    <Slider className='event_slider' {...settings}>
                        {
                            arrEvent.map(function (item, i) {
                                return (
                                    <EventItem key={i} title={arrEvent[i].title} date={arrEvent[i].date} location={arrEvent[i].location} img={arrEvent[i].img}/>
                                )
                            })
                        }

                    </Slider>

                    :
                    <OverflowScrolling className='overflow-scrolling-events events_list'>

                        {
                            arrEvent.map(function (item, i) {
                                return (
                                    <EventItem key={i} title={arrEvent[i].title} date={arrEvent[i].date} location={arrEvent[i].location} img={arrEvent[i].img}/>
                                )
                            })
                        }

                    </OverflowScrolling>
            }
        </div>
    )
}