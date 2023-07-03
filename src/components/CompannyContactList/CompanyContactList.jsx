import './companyContactList.css';

export default function CompanyContactList(){
    return(
        <div className='company_contacts_list'>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    instagram
                </h3>
                <p className='company_contacts_list-example'>@example</p>
                <a href="#" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    telegram
                </h3>
                <p className='company_contacts_list-example'>@example</p>
                <a href="#" className='company_contacts_list-href'>explore</a>
            </div>
            <div className='company_contacts_list_item'>
                <h3 className='company_contacts_list-title'>
                    mail
                </h3>
                <p className='company_contacts_list-example'>@example</p>
                <a href="#" className='company_contacts_list-href'>explore</a>
            </div>
        </div>
    )
}