import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    const formik = useFormik({
                                 initialValues: {
                                     name: '',
                                     holes: '',
                                     par: '',
                                 },
                                 onSubmit: values => {
                                     alert(JSON.stringify(values, null, 2));
                                 },
                             });
    return (
        <form className="addForm" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Course Name </label>
            <input
                className="name"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <br />
            <label htmlFor="lastName">Number of Holes </label>
            <input
                className="holes"
                id="holes"
                name="holes"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.holes}
            />
            <br />
            <label htmlFor="par">Course Par </label>
            <input
                className="par"
                id="par"
                name="par"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.par}
            />
            <br />
            <button type="submit" className="addSubmit">Add</button>
        </form>
    );
};

export default SignupForm