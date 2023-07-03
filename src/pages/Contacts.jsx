import PagesHedader from "../components/PagesHedader/PagesHedader";
import CompanyContactList from "../components/CompannyContactList/CompanyContactList";

export default function Contacts(){

    return(
        <div>
            <PagesHedader title={"contacts"}/>
            <CompanyContactList/>
        </div>
    )
}