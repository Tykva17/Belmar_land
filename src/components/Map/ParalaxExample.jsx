import './paralax.css';
import AboutUs from "../../pages/AboutUs";

export default function ParalaxExample(){
    const img = require("../../images/space.jpg")

    return (
        <>
            <div className="wrapper parallax">
                   <AboutUs/>
            </div>

        </>

    );

}