import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contactForm.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле є обовязковим'),
    telegramm: Yup.string().required('Поле "Електронна пошта" є обовязковим'),
    comment: Yup.string().required('Поле "Коментар" є обовязковим'),
});


const ContactForm = () => {

    const { translations } = useContext(LanguageContext);



    function submitFormToGoogleSheet(name, telegramm, comment) {

        let paramAffOrAdv = localStorage.getItem('affOrAdvNow');
        let paramLang = localStorage.getItem('langNow');

        let formData = {
            'name': name,
            'telegram': telegramm,
            'comment': comment,
            '_token' : '873429:recorca',
            'partner' : paramAffOrAdv,
            'lang' : paramLang
        };

        let url = `https://${window.location.hostname}/send.php`;

        let xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('Форма успішно відправлена');
            }
        };
        console.log('JSON formdate : ' , JSON.stringify(formData))
        xhr.send(JSON.stringify(formData));

    }



    const formik = useFormik({
        initialValues: {
            name: '',
            telegramm: '',
            comment: '',
        },
        handleChange: event => {
            const { name, value } = event.target;
            formik.setFieldValue(name, value);
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            submitFormToGoogleSheet(formik.values.name, formik.values.telegramm,formik.values.comment);
            setPopupClose(true);
            formik.setFieldValue('name','');
            formik.setFieldValue('telegramm','');
            formik.setFieldValue('comment','');
        },
    });
    const [focusedName, setFocusedName] = useState(false);
    const [focusedEmail, setFocusedEmail] = useState(false);
    const [focusedComment, setFocusedComment] = useState(false);
    const handleFocusName = () => {
        setFocusedName(true);
    };
    const handleBlurName = () => {
        setFocusedName(false);
    };
    const handleFocusEmail = () => {
        setFocusedEmail(true);
    };
    const handleBlurEmail = () => {
        setFocusedEmail(false);
    };
    const handleFocusComment = () => {
        setFocusedComment(true);
    };
    const handleBlurComment = () => {
        setFocusedComment(false);
    };

    const [popupClose, setPopupClose] = useState(false);
    const handlePopupClose = () => {
        setPopupClose(false);
    }

    return (
        <form className='form_submit' onSubmit={formik.handleSubmit}>
            { popupClose ?
                <div onClick={handlePopupClose} className='popup_send'>
                    <div className="popup_send_box">
                        <h3 className="popup_send_box_title">{translations.thanksTitle}!</h3>
                        <p className="popup_send_box_text">{translations.thanksText}</p>
                    </div>
                </div> : false
            }
            <div className='form_box'>
                <label
                    className={`form_label ${focusedName || formik.values.name ? 'active' : ''}`}
                >{translations.contactFormLabelList[0]}</label>
                <input
                    className={formik.errors.name ? 'error form_input' : 'form_input'}
                    id='name'
                    type='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onFocus={handleFocusName}
                    onBlur={handleBlurName}
                />
            </div>

            <div className='form_box'>
                <label
                    className={`form_label ${focusedEmail || formik.values.telegramm ? 'active' : ''}`}
                >{translations.contactFormLabelList[1]}</label>
                <input
                    className={formik.errors.telegramm ? 'error form_input' : 'form_input'}
                    id='telegramm'
                    type='text'
                    value={formik.values.telegramm}
                    onChange={formik.handleChange}
                    onFocus={handleFocusEmail}
                    onBlur={handleBlurEmail}
                />
            </div>

            <div className='form_box'>
                <label
                    className={`form_label ${focusedComment || formik.values.comment ? 'active' : ''}`}
                >{translations.contactFormLabelList[2]}</label>
                <input
                    className={formik.errors.comment ? 'error form_input' : 'form_input'}
                    id='comment'
                    type='comment'
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    onFocus={handleFocusComment}
                    onBlur={handleBlurComment}
                />
            </div>

            <button className='form_submit_btn' type="submit">{translations.contactFormSubmit}</button>
        </form>
    );
};

export default ContactForm;
