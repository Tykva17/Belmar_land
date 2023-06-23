import avatar from '../../images/Image.png';
import './reviewsItem.css';


export default function ReviewItem(){

    return(
        <div className='review_item_box'>
            <div className='review_item'>
                <div className='review_item_img'>
                    <img src={avatar} alt="#ava"/>
                </div>
                <div className='review_item_name'>
                    <h3>Name</h3><h3>Surname</h3>
                </div>
                <div>
                    <p className="review_item_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    )

}