import cirkles from "../../images/cirkles.png";
import './PagesHedader.css';
export default function PagesHedader({title}){

    return(
        <div className='about_hedader_top'>
            <div className='hedader_top_cirkles'>
                <img src={cirkles} alt=""/>
            </div>
            <div className='about_hedader_top_info_titles'>
                <h1 className='about_hedader_top_info_title'>{title}</h1>
            </div>
        </div>
    )

}