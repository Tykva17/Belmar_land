import './advanteges.css';
import arrow from '../../images/material-symbols_line-end-arrow-outline.png';
import lock from '../../images/noun-lock-1175394 1.png';
import eyes from '../../images/noun-eyes-363350 1.png';


export default function Advanteges(){
    return (
        <div className='advanteges'>
            <div className="advanteges_side-boxtitle">
                <h1 className="advanteges_side-title">advanteges</h1>
            </div>
            <div className="advanteges_main">
                <div className="advanteges_main_box">
                    <div className="advanteges_main_box_img">
                        <img src={lock} alt="eyes"/>
                    </div>
                    <h2>
                        Reliable platform <br/> for your earnings
                    </h2>
                </div>
                <div className="advanteg_main_line"></div>
                <div className="advanteges_main_box">
                    <div className="advanteges_main_box_img">
                        <img src={eyes} alt="eyes"/>
                    </div>
                    <h2>
                        Direct or <br/> exclusive offers
                    </h2>
                </div>
            </div>
            <div className="advanteges_link">
                <img src={arrow} alt="->"/>
            </div>
        </div>
    )
}