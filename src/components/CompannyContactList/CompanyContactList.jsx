import './companyContactList.css';

export default function CompanyContactList(){
    return(
        <div className='company_contacts_list'>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Linkedin
                </h3>
                <a target="_blank" href="https://www.linkedin.com/in/belmar-marketing-78329b241/" className='company_contacts_list-example'>belmar-marketing</a>
                <a target="_blank" href="https://www.linkedin.com/in/belmar-marketing-78329b241/" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Telegram
                </h3>
                <a target="_blank" href="https://t.me/Belmar_Marketing" className='company_contacts_list-example'>@Belmar_Marketing</a>
                <a target="_blank" href="https://t.me/Belmar_Marketing" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Email
                </h3>
                <a target="_blank" href="mailto:belmarmarketingmanager@gmail.com" className='company_contacts_list-example'>belmarmarketing<br/>@gmail.com</a>
                <a target="_blank" href="mailto:belmarmarketingmanager@gmail.com" className='company_contacts_list-href'>explore</a>
            </div>
        </div>
    )
}