import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import './map.css';
import geoUrl from './raw.githubusercontent.com_deldersveld_topojson_master_world-countries.json';
import {useState} from "react";




export default function MapChart() {

    const [country, setCountry] = useState('');
    const handleMouseEnter = (e) => {
        console.log(e)
        setCountry(e.properties.name)
    }

    return (
       <div className='map_box'>
           <ComposableMap>
               <Geographies geography={geoUrl}>
                   {({ geographies }) =>
                       geographies.map((geo) => (
                           <Geography key={geo.rsmKey}  onMouseEnter={(e)=> handleMouseEnter(geo)} geography={geo} />
                       ))
                   }
               </Geographies>
           </ComposableMap>
           <div className='country_name'>
               {country}
           </div>
       </div>
    )
}