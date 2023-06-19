import {useNavigate} from "react-router-dom";
import './header.css';

export default function Header(){

    const navigate = useNavigate();
    const handleAlbumClick = (page) => {
        navigate(`/${page}`);
    };


    return(
        <div className='header'>
            <div className='logo'>
               <h1 onClick={() => handleAlbumClick('')}>Belmar</h1>
            </div>
            <div className='navbar_links'>
                <div className="navbar_links_container">
                    <button onClick={() => handleAlbumClick('about_us')}>about us</button>
                    <button onClick={() => handleAlbumClick('events')}>events</button>
                    <button onClick={() => handleAlbumClick('contacts')}>contacts</button>
                </div>
            </div>
            <div className='lang'>
                <h1>en</h1>
            </div>
        </div>
    )
}