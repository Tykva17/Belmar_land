import xLines from '../../images/x-lines.png';
import './pageAboutMainInfo.css';


export default function PageAboutMainInfo(){

    return(<div className='page_about_main_info'>
                <div className='page_about_main_info_title-box'>
                    <h2 className='page_about_main_info_title'>
                        Lorem ipsum dolor sit
                    </h2>
                </div>
                <div className='page_about_main_info_text-box'>
                    <div className='page_about_main_info_img-box'>
                        <img src={xLines} alt="x" className='page_about_main_info_img'/>
                    </div>
                    <div className='page_about_main_info_text-item'>
                        <p className='page_about_main_info_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/><br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
    </div>)

}