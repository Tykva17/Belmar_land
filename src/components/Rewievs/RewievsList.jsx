import ReviewItem from "./ReviewsItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../../images/material-symbols_line-end-arrow-outline.png';
import './reviewsList.css';
export default function ReviewList(){

    const CustomPrevArrow = (props) => (
        <button className='prev_arrow arrow_slider' onClick={props.onClick}>
            <img src={arrow} alt=""/>
        </button>
    );

    const CustomNextArrow = (props) => (
        <button className='next_arrow arrow_slider' onClick={props.onClick}>
            <img src={arrow} alt=""/>
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
                   <ReviewItem/>
                   <ReviewItem/>
                   <ReviewItem/>
               </Slider>
           </div>
        </div>

    )
}