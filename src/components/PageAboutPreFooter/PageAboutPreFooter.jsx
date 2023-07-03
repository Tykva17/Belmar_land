import './pageAboutPreFooter.css';
import dvd_logo from '../../images/DVD_logo.png';

export default function PageAboutPreFooter(){

    return(
        <div className='page_about_prefooter'>
            <div className='page_about_prefooter_box'>
                <h3 className='page_about_prefooter_box-title'>Lorem ipsum dolor sit</h3>
                <p className='page_about_prefooter_box-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br/><br/>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className='dvd_animation_box'>
                <img src={dvd_logo} alt="DVD"/>
            </div>

        </div>
    )

}