import './reviewsItem.css';


export default function ReviewItem({title, text}){


    const imgReviewImages = {
        avatar1 : require('../../images/Image.png')
    }

    return(
        <div className='review_item_box'>
            <div className='review_item'>
                <div className='review_item_img'>
                    <img src={imgReviewImages.avatar1} alt="#ava"/>
                </div>
                <div className='review_item_name'>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p className="review_item_text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )

}