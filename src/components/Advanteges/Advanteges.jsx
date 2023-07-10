import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import AdvantegesItem from "./AdvantegesItem";
import './advanteges.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function Advanteges(){
    const { translations } = useContext(LanguageContext);

    const imgAdvImages = {
        arrow  : require('../../images/material-symbols_line-end-arrow-outline.png'),
        lock  : require('../../images/noun-lock-1175394 1.png'),
        eyes  : require('../../images/noun-eyes-363350 1.png'),
        analityc  : require('../../images/Ico_Graphic.png'),
        cup  : require('../../images/Ico_Cup.png').default,
        brain : require('../../images/Ico_Head_Settings.png').default
    }

    const [isMobile , setIsMobile] = useState(false)
    const [slidesShowScroll , setSlidesShowScroll]  =  useState(2);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)'); // Установите нужный вам медиа-запрос
        const handleResize = (event) => {
            setIsMobile(event.matches);
            setSlidesShowScroll(isMobile ? 1 : 2);
        };
        mediaQuery.addListener(handleResize);
        setIsMobile(mediaQuery.matches);
        setSlidesShowScroll(isMobile ? 1 : 2);
        return () => {
            mediaQuery.removeListener(handleResize);
        };

    }, [isMobile]);

    const CustomNextArrow = (props) => (
        <button className="advanteges_link" onClick={props.onClick}>
            <img src={imgAdvImages.arrow} alt="->"/>
        </button>
    );
    const CustomPrevArrow = (props) => (
        <button className="d-none" onClick={props.onClick}>n
        </button>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesShowScroll,
        slidesToScroll: slidesShowScroll,
        prevArrow : <CustomPrevArrow/>,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div className='advanteges'>
            <div className="advanteges_side-boxtitle">
                <h1 className="advanteges_side-title">{translations.mainPageAdvantegesTitle}</h1>
            </div>
            <Slider className='advanteges_main' {...settings}>
                <AdvantegesItem src={imgAdvImages.lock} text={translations.mainPageAdvantegesList[0]}/>
                <AdvantegesItem src={imgAdvImages.eyes} text={translations.mainPageAdvantegesList[1]}/>
                <AdvantegesItem src={imgAdvImages.cup} text={translations.mainPageAdvantegesList[2]}/>
                <AdvantegesItem src={imgAdvImages.analityc} text={translations.mainPageAdvantegesList[3]}/>
                <AdvantegesItem src={imgAdvImages.brain} text={translations.mainPageAdvantegesList[4]}/>
            </Slider>
        </div>
    )
}