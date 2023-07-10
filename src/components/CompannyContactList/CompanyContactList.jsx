import './companyContactList.css';

export default function CompanyContactList(){
    return(
        <div className='company_contacts_list'>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Linkedin
                </h3>
                <a href="https://www.linkedin.com/in/alisa-liedovskykh-78329b241/" className='company_contacts_list-example'>alisa-liedovskykh</a>
                <a href="https://www.linkedin.com/in/alisa-liedovskykh-78329b241/" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Telegram
                </h3>
                <a href="https://t.me/Belmar_Marketing" className='company_contacts_list-example'>@Belmar_Marketing</a>
                <a href="https://t.me/Belmar_Marketing" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    Email
                </h3>
                <a href="mailto:belmarmarketingmanager@gmail.com" className='company_contacts_list-example'>belmarmarketing</a>
                <a href="mailto:belmarmarketingmanager@gmail.com" className='company_contacts_list-href'>explore</a>
            </div>
        </div>
    )
}