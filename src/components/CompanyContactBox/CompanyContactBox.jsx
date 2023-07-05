import ContactForm from "../ContactForm/ContactForm";
import './companyContactBox.css';

export default function CompanyContactBox(){

    return(
        <div className='company_contact'>

            <div className='company_contact_box'>
                <h2 className='company_contact_box-title'>have a question?</h2>
            </div>
            <ContactForm/>

        </div>
    )

}