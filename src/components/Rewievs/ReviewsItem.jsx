import './reviewsItem.css';


export default function ReviewItem({title, text, img}){




    return(
        <div className='review_item_box'>
            <div className='review_item'>
                <div className='review_item_img'>
                    <img src={img} alt="#ava"/>
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