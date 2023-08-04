import {useEffect, useState} from "react";
import './hedader_togg_side.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function HedaderToggSide(){

    const { changeAffAdv } = useContext(LanguageContext);
    const [isToggled, toggle] = useState(true); // aff ==> false , adv ==> true

    useEffect(() => {

        setTimeout(()=>{
            const affOrAdvNow = localStorage.getItem("affOrAdvNow");
            (affOrAdvNow == 'aff') ? toggle(false) : toggle(true);
            console.log('isToggled hedader',isToggled, affOrAdvNow)
        },1500)

    },[])

    const callback = () => {
        toggle(!isToggled);
        sendToContext(!isToggled);
    }

    const handleChange = () => {
        console.log('handleChange',isToggled)
    }

    const sendToContext = (val) => {
        val ? changeAffAdv('adv', true) : changeAffAdv('aff', false);
        console.log('toggle', isToggled, val)
    }

    return (
        <div className='hedader_togg_side'>
            <div className='hedader_togg_side_rot'>
                <div className='aff_side'>
                    <h3 className='hedader_togg_side_tittle'>Affiliate</h3>
                </div>
                <div>
                    <label className='hedader_togg_side_label'>
                        <input className='hedader_togg_side_input' type="checkbox" onChange={handleChange} checked={isToggled} onClick={callback} />
                        <span className='hedader_togg_side_span' />

                    </label>
                </div>
                <div className='adv_side'>
                    <h3 className='hedader_togg_side_tittle'>Advertiser</h3>
                </div>
            </div>
        </div>
    )
}