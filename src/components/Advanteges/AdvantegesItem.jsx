
export default function AdvantegesItem({src,text}){

    return(
        <div className="advanteges_main_box">
            <div className="advanteges_main_box_img">
                <img src={src} alt="eyes"/>
            </div>
            <h2>
                {text}
            </h2>
        </div>
    )

}