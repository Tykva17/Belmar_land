import {useNavigate} from "react-router-dom";
import './header.css';
import menuBtn from '../../images/mdi-light_menu.png';
import mobMenuClose from '../../images/mob-close.svg';
import {useState} from "react";

export default function Header(){

    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();
    const handleAlbumClick = (page) => {
        navigate(`/${page}`);
    };

    const menuToggler = () => {
        setShowMenu(!showMenu);
    }


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
                    <div className='navbar_link_mob'>
                        <img onClick={menuToggler} src={menuBtn} alt=""/>
                    </div>
                    <h1>en</h1>
                </div>
                {
                    showMenu ? (
                        <div className="mob_menu">
                            <div className='mob_menu-close'>
                                <img onClick={menuToggler} src={mobMenuClose} alt=""/>
                            </div>
                            <div className="mob_menu_links_container">
                                <button onClick={() => handleAlbumClick('about_us')}>about us</button>
                                <button onClick={() => handleAlbumClick('events')}>events</button>
                                <button onClick={() => handleAlbumClick('contacts')}>contacts</button>
                            </div>
                        </div>) : false
                }
            </div>

    )
}