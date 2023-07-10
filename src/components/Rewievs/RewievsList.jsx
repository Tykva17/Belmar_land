import ReviewItem from "./ReviewsItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './reviewsList.css';
import {useContext} from "react";
import LanguageContext from "../../LanguageContext/LanguageContext";
export default function ReviewList(){

    const { translations } = useContext(LanguageContext);

    const arrow = {img : require('../../images/material-symbols_line-end-arrow-outline.png')};

    const CustomPrevArrow = (props) => (
        <button className='prev_arrow arrow_slider' onClick={props.onClick}>
            <img src={arrow.img} alt=""/>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button className='next_arrow arrow_slider' onClick={props.onClick}>
            <img src={arrow.img} alt=""/>
        </button>
    );


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };


    return(
        <div className='reviews'>
           <div className="reviews_box">
               <h2 className="reviews_box-title">reviews</h2>
               <Slider className='reviews_slider' {...settings}>

                    <ReviewItem key={1} title={translations.reviewsList[0].name} text={translations.reviewsList[0].text}/>
                    <ReviewItem key={2} title={translations.reviewsList[1].name} text={translations.reviewsList[1].text}/>
                    <ReviewItem key={3} title={translations.reviewsList[2].name} text={translations.reviewsList[2].text}/>
                    <ReviewItem key={4} title={translations.reviewsList[3].name} text={translations.reviewsList[3].text}/>
                    <ReviewItem key={5} title={translations.reviewsList[4].name} text={translations.reviewsList[4].text}/>

               </Slider>
           </div>
        </div>

    )
}