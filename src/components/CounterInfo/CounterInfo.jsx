import CountUp from 'react-countup';
import './CounterInfo.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";

export default function CounterInfo(){
    const { translations } = useContext(LanguageContext);

    return(
        <div className='counter_info'>
           <div className='counter_info-item'>
               <CountUp className='counter_info-item-title'
                        end={translations.achievement[0].title}
                        decimal="."
                        enableScrollSpy={true}
                        suffix="kk+"/>
               <p className='counter_info-item-subtitle'>{translations.achievement[0].text}</p>
           </div>
            <div className='counter_info-item'>
                <CountUp className='counter_info-item-title'
                         end={translations.achievement[1].title}
                         enableScrollSpy={true}
                         suffix="k+"
                         decimal="."/>
                <p className='counter_info-item-subtitle'>{translations.achievement[1].text}</p>
            </div>
            <div className='counter_info-item'>
                <CountUp className='counter_info-item-title'
                         end={translations.achievement[2].title}
                         enableScrollSpy={true}
                         suffix="+"
                         decimal="."/>
                <p className='counter_info-item-subtitle'>{translations.achievement[2].text}</p>
            </div>
            <div className='counter_info-item'>
                <h3 className='counter_info-item-subtitle pink_text'>unlim <br/> cap</h3>
                 <p className='counter_info-item-subtitle'>{translations.achievement[3].text}</p>
            </div>
        </div>
    )


}