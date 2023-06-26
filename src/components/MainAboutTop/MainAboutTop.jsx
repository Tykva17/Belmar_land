import './MainAboutTop.css';
import {useEffect, useState} from "react";

export default function MainAboutTop ({isMobileTitle}){




    return(
        <div className='main_about_top'>
            <div className='main_about_top_title'>
                {isMobileTitle ?
                (<h1>
                    we are <br/> the
                    <span className='pink_text'>best</span> <br/>
                    company
                </h1>) :
                (<h1>
                    we are the <br/>
                    <span className='pink_text'>best</span> <br/>
                    company
                </h1>)
                }
            </div>
        </div>
    )
}