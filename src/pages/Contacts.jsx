import PagesHedader from "../components/PagesHedader/PagesHedader";
import CompanyContactList from "../components/CompannyContactList/CompanyContactList";
import CompanyContactBox from "../components/CompanyContactBox/CompanyContactBox";
import LanguageContext from "../LanguageContext/LanguageContext";
import {useContext} from "react";
export default function Contacts(){
    const { translations } = useContext(LanguageContext);

    return(
        <div>
            <PagesHedader title={translations.contactsTopTitle}/>
            <CompanyContactList/>
            <CompanyContactBox/>
        </div>
    )
}