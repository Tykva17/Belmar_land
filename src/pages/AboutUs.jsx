import PagesHedader from "../components/PagesHedader/PagesHedader";
import PageAboutMainInfo from "../components/PageAboutMainInfo/PageAboutMainInfo";
import CounterInfo from "../components/CounterInfo/CounterInfo";
import PageAboutPreFooter from "../components/PageAboutPreFooter/PageAboutPreFooter";


export default function AboutUs(){

    return(
        <div>
            <PagesHedader title={"about us"}/>
            <PageAboutMainInfo/>
            <CounterInfo/>
            <PageAboutPreFooter/>
        </div>
    )
}