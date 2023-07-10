import PagesHedader from "../components/PagesHedader/PagesHedader";
import EventsBox from "../components/EventsBox/EventsBox";
import LanguageContext from "../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function Events(){


    const { translations } = useContext(LanguageContext);

    return(
        <div>
            <PagesHedader title={translations.eventsPageTitle}/>
            <EventsBox/>
        </div>
    )
}