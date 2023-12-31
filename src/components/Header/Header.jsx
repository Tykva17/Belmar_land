import {useNavigate} from "react-router-dom";
import './header.css';
import menuBtn from '../../images/mdi-light_menu.png';
import mobMenuClose from '../../images/mob-close.svg';
import {useContext, useEffect, useState} from "react";
import classnames from "classnames";
import LanguageContext from "../../LanguageContext/LanguageContext";


export default function Header(){
    const { translations, changeLanguage, toggleLang } = useContext(LanguageContext);
    const [langOn, setLangOn] = useState(localStorage.getItem("langNow"));

    const [showMenu, setShowMenu] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const bgImage = { img : require('../MainAboutTop/mainAboutTopBg.png') }

    const navigate = useNavigate();
    const handleAlbumClick = (page) => {
        navigate(`/${page}`);
        setActiveItem(page);
        setShowMenu(false);
    };

    const toggleLanguage = (lang) => {
        setLangOn(lang)
        changeLanguage(lang);
        console.log('toggleLang  ' + toggleLang)
        console.log('lang  ' + lang)
    };

    const menuToggler = () => {
        setShowMenu(!showMenu);
    }

    const headerLogo = {
        desk : require('../../images/logo.png'),
        mob : require('../../images/logo_mob.png')
    }

    const [isMobileLogo , setIsMobileLogo] = useState(false)

    useEffect(() => {
        console.log(headerLogo)
        const mediaQuery = window.matchMedia('(max-width: 480px)'); // Установите нужный вам медиа-запрос
        const handleResize = (event) => {
            setIsMobileLogo(event.matches);
        };
        mediaQuery.addListener(handleResize);
        setIsMobileLogo(mediaQuery.matches);
        return () => {
            mediaQuery.removeListener(handleResize);
        };

    }, []);




    return(
            <div className='header'>
                <div className='logo'>
                    { isMobileLogo ?
                        (
                            <img onClick={() => handleAlbumClick('')} src={headerLogo.mob} alt='Belmar'/>
                        )
                        :
                        (
                            <img onClick={() => handleAlbumClick('')} src={headerLogo.desk} alt='Belmar'/>
                        )
                    }
                    {/*<h1 onClick={() => handleAlbumClick('')}>Belmar</h1>*/}
                    {/*<span onClick={() => handleAlbumClick('')}>marketing</span>*/}
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
                    {/*<h1 onClick={toggleLanguage}>{`>${translations.toggleLang}`}</h1>*/}
                    <h1><span className={langOn == 'en' ? 'active_lang' : ''} onClick={() => toggleLanguage('en')}>en</span> | <span className={langOn == 'ua' ? 'active_lang' : ''} onClick={() => toggleLanguage('ua')}>ua</span></h1>
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