import './events.css';
export default function EventItem({title, img, date, location}){

    return(
        <div className='event_item'>
            <img className='event_img' src={img} alt=""/>
            <div className='event_info'>
                <h3 className="event_name">{title}</h3>
                <p className="event_date">{location}</p>
                <p className="event_date">{date}</p>
            </div>
        </div>
    )
}