import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../../images/material-symbols_line-end-arrow-outline.png';
import lock from '../../images/noun-lock-1175394 1.png';
import eyes from '../../images/noun-eyes-363350 1.png';
import analityc from '../../images/Ico_Graphic.png';
import cup from '../../images/Ico_Cup.png';
import brain from '../../images/Ico_Head_Settings.png';
import {useEffect, useState} from "react";
import AdvantegesItem from "./AdvantegesItem";
import './advanteges.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function Advanteges(){
    const { translations } = useContext(LanguageContext);

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
            <img src={arrow} alt="->"/>
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
                <AdvantegesItem src={lock} text={translations.mainPageAdvantegesList[0]}/>
                <AdvantegesItem src={eyes} text={translations.mainPageAdvantegesList[1]}/>
                <AdvantegesItem src={cup} text={translations.mainPageAdvantegesList[2]}/>
                <AdvantegesItem src={analityc} text={translations.mainPageAdvantegesList[3]}/>
                <AdvantegesItem src={brain} text={translations.mainPageAdvantegesList[4]}/>
            </Slider>


        </div>
    )
}