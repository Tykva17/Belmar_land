import './PagesHedader.css';
import Cirkle from "../Map/Cirkle";
export default function PagesHedader({title}){

    const cirkleImg = { img : require("../../images/cirkles.png")};

    return(
        <div className='about_hedader_top'>
            <div className='hedader_top_cirkles'>
                {/*<img src={cirkleImg.img} alt=""/>*/}
                <Cirkle/>
            </div>
            <div className='about_hedader_top_info_titles'>
                <h1 className='about_hedader_top_info_title'>{title}</h1>
            </div>
        </div>
    )

}