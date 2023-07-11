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
    const imgReviewImages = {
        avatar1 : require('../../images/Image.png'),
        avatar2 : require('../../images/palma.png'),
        avatar3 : require('../../images/Adscobar.PNG'),
        avatar4 : require('../../images/hugeOff.png'),
    }

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

                    <ReviewItem img={imgReviewImages.avatar4} key={1} title={translations.reviewsList[0].name} text={translations.reviewsList[0].text}/>
                    <ReviewItem img={imgReviewImages.avatar1} key={2} title={translations.reviewsList[1].name} text={translations.reviewsList[1].text}/>
                    <ReviewItem img={imgReviewImages.avatar2} key={3} title={translations.reviewsList[2].name} text={translations.reviewsList[2].text}/>
                    <ReviewItem img={imgReviewImages.avatar1} key={4} title={translations.reviewsList[3].name} text={translations.reviewsList[3].text}/>
                    <ReviewItem img={imgReviewImages.avatar3} key={5} title={translations.reviewsList[4].name} text={translations.reviewsList[4].text}/>

               </Slider>
           </div>
        </div>

    )
}