import PagesHedader from "../components/PagesHedader/PagesHedader";
import CompanyContactList from "../components/CompannyContactList/CompanyContactList";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contacts(){

    return(
        <div>
            <PagesHedader title={"contacts"}/>
            <CompanyContactList/>
            <ContactForm/>
        </div>
    )
}