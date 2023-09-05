import PagesHedader from "../components/PagesHedader/PagesHedader";
import PageAboutMainInfo from "../components/PageAboutMainInfo/PageAboutMainInfo";
import CounterInfo from "../components/CounterInfo/CounterInfo";
import PageAboutPreFooter from "../components/PageAboutPreFooter/PageAboutPreFooter";
import LanguageContext from "../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function AboutUs(){
    const { translations } = useContext(LanguageContext);
    return(
        <div>
            <PagesHedader title={translations.aboutTopTitle}/>
            <PageAboutMainInfo/>
            <CounterInfo/>
            <PageAboutPreFooter/>
        </div>
    )
}