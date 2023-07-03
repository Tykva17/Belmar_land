import Hedader from "../components/Hedader/Hedader";
import MainAbout from "../components/MainAbout/MainAbout";
import MarqueeLine from "../components/MarqueeLine/MarqueeLine";
import Advanteges from "../components/Advanteges/Advanteges";
import ReviewList from "../components/Rewievs/RewievsList";
import EventsBox from "../components/EventsBox/EventsBox";


export default function Home(){
    return (
        <>
            <Hedader/>
            <MainAbout/>
            <MarqueeLine/>
            <Advanteges/>
            <ReviewList/>
            <EventsBox/>
        </>
    )
}