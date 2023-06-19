import "./hedader_bottom.css";
import scode from '../../images/s_code.png';
import gradient from '../../images/gradient.png';
import circle_text from '../../images/circle_text.png';
export default function HedaderBottom(){


    return(
        <div className='hedader_bottom'>
            <div className='hedader_bottom_info'>
                <div className='hedader_bottom_info_box'>
                    <p className='hedader_bottom_info_box_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                <div className='hedader_bottom_info_circle_text'>
                    <img src={circle_text} alt=""/>
                </div>
                <div className='hedader_bottom_info_box year'>
                    <span>
                        since 2022
                    </span>
                </div>
            </div>
            <div className='hedader_bottom_shin'>
                <img src={gradient} alt=""/>
            </div>
            <div className='hedader_bottom_scode'>
                <img src={scode} alt=""/>
            </div>

        </div>
    )
}