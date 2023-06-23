import './events.css';
import EventItem from "./EventItem";

export default function EventsBox(){


    return(
        <div className='events'>
            <div className='events_header'>
                <h1 className='events_header_title'>events</h1>
                <span className='events_header_link'>see all</span>
            </div>
            <div className='events_list'>
                <EventItem/>
                <div className='event_main_line'></div>
                <EventItem/>
                <div className='event_main_line'></div>
                <EventItem/>
            </div>
        </div>
    )
}