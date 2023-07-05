import PagesHedader from "../components/PagesHedader/PagesHedader";
import CompanyContactList from "../components/CompannyContactList/CompanyContactList";
import CompanyContactBox from "../components/CompanyContactBox/CompanyContactBox";

export default function Contacts(){

    return(
        <div>
            <PagesHedader title={"contacts"}/>
            <CompanyContactList/>
            <CompanyContactBox/>
        </div>
    )
}