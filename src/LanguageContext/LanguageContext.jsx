import React, {createContext, useEffect, useState} from 'react';
import uaJsonAff from '../text-data/uaAff.json';
import enJsonAff from '../text-data/enAff.json';
import uaJsonAdv from '../text-data/uaAdv.json';
import enJsonAdv from '../text-data/enAdv.json';
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [toggleLang, setToggleLang] = useState(null); // ua ==> true , en ==> false
    const [affAdv, setAffAdv] = useState(null); // en ==> true , ua ==> false
    const [translations, setTranslations] = useState(uaJsonAff);

    const showText = (lang, affadv) => {
        console.log(lang, affadv)
        if(lang == 'ua' && affadv == 'aff'){
            setTranslations(uaJsonAff);
        }else if(lang == 'ua' && affadv == 'adv'){
            setTranslations(uaJsonAdv);
        }else if(lang == 'en' && affadv == 'aff'){
            setTranslations(enJsonAff);
        }else if(lang == 'en' && affadv == 'adv'){
            setTranslations(enJsonAdv);
        }
    }

    const changeLanguage = (newLanguage) => {
        setToggleLang(newLanguage);
        showText(newLanguage,affAdv);
    };
    const changeAffAdv = (affOrAdv) => {
        console.log(affOrAdv)
        setAffAdv(affOrAdv);
        showText(toggleLang,affOrAdv);
    }

    useEffect(() => {
        const langNow = localStorage.getItem("langNow");
        if(langNow !== undefined || langNow !== null){
            localStorage.setItem("langNow", "ua");
            setToggleLang('ua');
            console.log(langNow , 'langNow if 1');
        }else{
            setToggleLang(langNow);
            console.log(langNow , 'langNow if 2');

        }
        console.log(langNow , 'langNow if after');


        const affOrAdvNow = localStorage.getItem("affOrAdvNow");
        if(affOrAdvNow !== undefined || affOrAdvNow !== null){
            localStorage.setItem("affOrAdvNow", "aff");
            setAffAdv('aff');
        }else{
            setAffAdv(affOrAdvNow);
        }

        console.log("toggleLang : " , toggleLang);
        console.log("affAdv : " , affAdv);
    },[setToggleLang, setAffAdv]);




    return (
        <LanguageContext.Provider value={{ translations, changeLanguage, changeAffAdv }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default LanguageContext;
