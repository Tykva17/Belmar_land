import {useNavigate} from "react-router-dom";
import './header.css';
import menuBtn from '../../images/mdi-light_menu.png';
import mobMenuClose from '../../images/mob-close.svg';
import {useContext, useState} from "react";
import classnames from "classnames";
import LanguageContext from "../../LanguageContext/LanguageContext";


export default function Header(){
    const { translations, changeLanguage } = useContext(LanguageContext);
    const [langOn, setLangOn] = useState(false)

    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const bgImage = { img : require('../MainAboutTop/mainAboutTopBg.png') }

    const navigate = useNavigate();
    const handleAlbumClick = (page) => {
        navigate(`/${page}`);
        setActiveItem(page);
        setShowMenu(false);
    };

    const toggleLanguage = () => {
        setLangOn(!langOn);
        langOn ? changeLanguage('en') : changeLanguage('ua');
    };

    const menuToggler = () => {
        setShowMenu(!showMenu);
    }


    return(
            <div className='header'>
                <div className='logo'>
                    <h1 onClick={() => handleAlbumClick('')}>Belmar</h1>
                    <span onClick={() => handleAlbumClick('')}>marketing</span>
                </div>
                <div className='navbar_links'>
                    <div className="navbar_links_container">
                        <button className={classnames('navbar_links_container-item', { 'active': activeItem === 'about_us' })} onClick={() => handleAlbumClick('about_us')}>{translations.navBarItems[0]}</button>
                        <button className={classnames('navbar_links_container-item', { 'active': activeItem === 'events' })} onClick={() => handleAlbumClick('events')}>{translations.navBarItems[1]}</button>
                        <button className={classnames('navbar_links_container-item', { 'active': activeItem === 'contacts' })} onClick={() => handleAlbumClick('contacts')}>{translations.navBarItems[2]}</button>
                    </div>
                </div>
                <div className='lang'>
                    <div className='navbar_link_mob'>
                        <img onClick={menuToggler} src={menuBtn} alt=""/>
                    </div>
                    <h1 onClick={toggleLanguage}>{translations.toggleLang}</h1>
                </div>
                {
                    showMenu ? (
                        <div className="mob_menu" style={{backgroundImage: `url("${bgImage.img}")`}}>
                            <div className='mob_menu-close'>
                                <img onClick={menuToggler} src={mobMenuClose} alt=""/>
                            </div>
                            <div className="mob_menu_links_container">
                                <button className={classnames('mob_menu_links_container-item', { 'active': activeItem === 'about_us' })} onClick={() => handleAlbumClick('about_us')}>{translations.navBarItems[0]}</button>
                                <button className={classnames('mob_menu_links_container-item', { 'active': activeItem === 'events' })} onClick={() => handleAlbumClick('events')}>{translations.navBarItems[1]}</button>
                                <button className={classnames('mob_menu_links_container-item', { 'active': activeItem === 'contacts' })} onClick={() => handleAlbumClick('contacts')}>{translations.navBarItems[2]}</button>
                            </div>
                        </div>) : false
                }
            </div>

    )
}