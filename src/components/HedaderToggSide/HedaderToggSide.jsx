import {useState} from "react";
import './hedader_togg_side.css';

export default function HedaderToggSide(){

    const [isToggled, toggle] = useState(true)

    const callback = () => {
        toggle(!isToggled)
    }

    return (
        <div className='hedader_togg_side'>
            <div className='hedader_togg_side_rot'>
                <div >
                    <h3 className='hedader_togg_side_tittle'>Affiliate</h3>
                </div>
                <div>
                    <label className='hedader_togg_side_label'>
                        <input className='hedader_togg_side_input' type="checkbox" defaultChecked={isToggled} onClick={callback} />
                        <span className='hedader_togg_side_span' />

                    </label>
                </div>
                <div>
                    <h3 className='hedader_togg_side_tittle'>Advertiser</h3>
                </div>
            </div>
        </div>
    )
}