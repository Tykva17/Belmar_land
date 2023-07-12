import React, {createContext, useEffect, useState} from 'react';
import uaJsonAff from '../text-data/uaAff.json';
import enJsonAff from '../text-data/enAff.json';
import uaJsonAdv from '../text-data/uaAdv.json';
import enJsonAdv from '../text-data/enAdv.json';
const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
    const [toggleLang, setToggleLang] = useState('en');
    const [affAdv, setAffAdv] = useState('adv');
    const [translations, setTranslations] = useState(enJsonAdv);

    const showText = (lang, affadv) => {
        if(lang == 'ua' && affadv == 'aff'){
            setTranslations(uaJsonAff);
        }else if(lang == 'ua' && affadv == 'adv'){
            setTranslations(uaJsonAdv);
        }else if(lang == 'en' && affadv == 'aff'){
            setTranslations(enJsonAff);
        }else if(lang == 'en' && affadv == 'adv'){
            setTranslations(enJsonAdv);
        }else if(affadv == 'adv'){
            setTranslations(enJsonAdv);
        }else if(affadv == 'aff'){
            setTranslations(enJsonAff);
        }else {
            setTranslations(enJsonAdv);
        }

        console.log(lang, affadv);
        setAffAdv(affadv);
        localStorage.setItem("affOrAdvNow", affadv);
        setToggleLang(lang);
        localStorage.setItem("langNow", lang);
    }

    const changeLanguage = (newLanguage) => {

        console.log(newLanguage)
        showText(newLanguage,affAdv);
    };
    const changeAffAdv = (affOrAdv) => {
        showText(toggleLang,affOrAdv);
    }

    useEffect(() => {
        let lang , affadv = '';
        const langNow = localStorage.getItem("langNow");
        if(langNow == 'null'){
            lang = 'en';
        }else {
            lang = langNow;
        }

        const affOrAdvNow = localStorage.getItem("affOrAdvNow");
        if(affOrAdvNow == 'null'){
            affadv = 'adv';
        }else{
            affadv = affOrAdvNow;
        }

        showText(lang , affadv);
    },[]);

    return (
        <LanguageContext.Provider value={{ translations, changeLanguage, changeAffAdv }}>
            {children}
        </LanguageContext.Provider>
    );
};
export default LanguageContext;