import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './contactForm.css';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Поле "" є обовязковим'),
    email: Yup.string().email('Неправильний формат електронної пошти').required('Поле "Електронна пошта" є обовязковим'),
    comment: Yup.string().required('Поле "Коментар" є обовязковим'),
});

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

    return (
        <form className='form_submit' onSubmit={formik.handleSubmit}>
            <div className='form_box'>
                <label className='form_label' htmlFor="name">Name:</label>
                <input
                    className={formik.touched.name && formik.errors.name ? 'error form_input' : 'form_input'}
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />

            </div>

            <div className='form_box'>
                <label className='form_label' htmlFor="email">E-mail:</label>
                <input
                    className={formik.touched.email && formik.errors.email ? 'error form_input' : 'form_input'}
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>

            <div className='form_box'>
                <label className='form_label' htmlFor="comment">Lorem ipsum dolor:</label>
                <textarea
                    className={formik.touched.comment && formik.errors.comment ? 'error form_input' : 'form_input'}
                    id="comment"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                />
            </div>

            <button className='form_submit_btn' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
