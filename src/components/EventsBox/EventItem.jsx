import eventImg from '../../images/events.png';
import './events.css';
export default function EventItem(){
    return(
        <div className='event_item'>
            <img className='event_img' src={eventImg} alt=""/>
            <div className='event_info'>
                <h3 className="event_name">event name</h3>
                <p className="event_date">24 june 2023</p>
            </div>
        </div>
    )
}