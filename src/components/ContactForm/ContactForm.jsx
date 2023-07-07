import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contactForm.css';
import LanguageContext from "../../LanguageContext/LanguageContext";
import {useContext} from "react";


const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле є обовязковим'),
    email: Yup.string().required('Поле "Електронна пошта" є обовязковим'),
    comment: Yup.string().required('Поле "Коментар" є обовязковим'),
});


const ContactForm = () => {

    const { translations } = useContext(LanguageContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: '',
        },
        handleChange: event => {
            const { name, value } = event.target;
            formik.setFieldValue(name, value);
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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

    return (
        <form className='form_submit' onSubmit={formik.handleSubmit}>
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
                    className={`form_label ${focusedEmail || formik.values.email ? 'active' : ''}`}
                >{translations.contactFormLabelList[1]}</label>
                <input
                    className={formik.errors.email ? 'error form_input' : 'form_input'}
                    id='email'
                    type='text'
                    value={formik.values.email}
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
