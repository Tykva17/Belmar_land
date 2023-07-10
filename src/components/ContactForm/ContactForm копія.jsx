import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contactForm.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле є обовязковим'),
    email: Yup.string().email('Неправильний формат електронної пошти').required('Поле "Електронна пошта" є обовязковим'),
    comment: Yup.string().required('Поле "Коментар" є обовязковим'),
});

const FloatingLabelInput = ({ label, type, value, onChange, id, inputClass }) => {
    const [focused, setFocused] = useState(false);
    const [inputClassName, setInputClassName] = useState('');

    const handleChangeClass = () => {
        setInputClassName(inputClass)
    }
    const handleFocus = () => {
        setFocused(true);
    };

    const handleBlur = () => {
        setFocused(false);
    };

    return (
        <div className='form_box'>
            <label
                className={`form_label ${focused || value ? 'active' : ''}`}
            >{label}</label>
            <input
                className={inputClassName}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};


const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            comment: '',
        },

        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    const handleClassChange = event => {

    };




    return (
        <form className='form_submit' onSubmit={formik.handleSubmit}>
            <FloatingLabelInput
                inputClass={formik.touched.name && formik.errors.name ? handleClassChange('error form_input') : handleClassChange('form_input')}
                id={'name'}
                label={'name'}
                type={'name'}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <FloatingLabelInput
                inputClass={formik.touched.name && formik.errors.name ? 'error form_input' : 'form_input'}
                id={'email'}
                label={'E-mail'}
                type={'email'}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <FloatingLabelInput
                inputClass={formik.touched.name && formik.errors.name ? 'error form_input' : 'form_input'}
                id={'comment'}
                label={'comment'}
                type={'text'}
                value={formik.values.comment}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />

            <button className='form_submit_btn' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
