import './preloader.css';
import {useSpring, animated} from 'react-spring';

export default function Preloader(){

    const props = useSpring({
            opacity: 1,
            width: `100%`,
            from: {
                opacity: 0,
                width: `0%`,
            },
            config : {
                duration : 2000
            }
    });

    const propsMain = useSpring({
        opacity: 0,
        zIndex: -99,
        // height: `0`,
        from: {
            opacity: 1,
            zIndex: 99,
            // height: `100%`,
        },
        config : {
            duration : 700
        },
        delay: 2000
    })

    return (
       <animated.div style={propsMain} className='animated_box'>
           <animated.div style={props} className='animated_title'>
               <h1><span>Belmar</span> <br/> Marketing</h1>
           </animated.div>
       </animated.div>
    );

}