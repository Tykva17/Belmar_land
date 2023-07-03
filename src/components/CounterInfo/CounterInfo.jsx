import CountUp from 'react-countup';
import './CounterInfo.css';


export default function CounterInfo(){

    return(
        <div className='counter_info'>
           <div className='counter_info-item'>
               <CountUp className='counter_info-item-title'
                        end={1}
                        decimal="."
                        enableScrollSpy={true}
                        suffix="k"/>
               <p className='counter_info-item-subtitle'>lorem ipsum dolor</p>
           </div>
            <div className='counter_info-item'>
                <CountUp className='counter_info-item-title'
                         end={200000}
                         enableScrollSpy={true}
                         decimal="."/>
                <p className='counter_info-item-subtitle'>lorem ipsum dolor</p>
            </div>
            <div className='counter_info-item'>
                <CountUp className='counter_info-item-title'
                         end={60}
                         enableScrollSpy={true}
                         decimal="."/>
                <p className='counter_info-item-subtitle'>lorem ipsum dolor</p>
            </div>
            <div className='counter_info-item'>
                <CountUp className='counter_info-item-title'
                         end={18000}
                         enableScrollSpy={true}
                         decimal="."/>
                 <p className='counter_info-item-subtitle'>lorem ipsum dolor</p>
            </div>
        </div>
    )


}