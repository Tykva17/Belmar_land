import ContactForm from "../ContactForm/ContactForm";
import './companyContactBox.css';
import {useContext} from "react";
import LanguageContext from "../../LanguageContext/LanguageContext";

export default function CompanyContactBox(){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='company_contact'>

            <div className='company_contact_box'>
                <h2 className='company_contact_box-title'>{translations.contactFormTitle}</h2>
            </div>
            <ContactForm/>

        </div>
    )

}