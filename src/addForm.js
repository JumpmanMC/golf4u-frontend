import React from 'react';
import {Formik} from 'formik';
const SignupForm = () => (
    <div>
        <Formik
            initialValues={{name: "", holes: "", par: ""}}
            onSubmit={(values, actions) => {
                /*
                fetch(`/api/v1/course`, {
                    method: 'POST',
                    body: JSON.stringify(values)
                })

                 */
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);

                actions.resetForm()
            }}
        >
            {props => (
                <form className="addForm" onSubmit={props.handleSubmit}>
                    <label htmlFor="name">Course Name </label>
                    <input
                        className="name"
                        id="name"
                        name="name"
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.name}
                    />
                    <br/>
                    <label htmlFor="lastName">Number of Holes </label>
                    <input
                        className="holes"
                        id="holes"
                        name="holes"
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.holes}
                    />
                    <br/>
                    <label htmlFor="par">Course Par </label>
                    <input
                        className="par"
                        id="par"
                        name="par"
                        type="text"
                        onChange={props.handleChange}
                        value={props.values.par}
                    />
                    <br/>
                    <button type="submit" className="addSubmit">Add</button>
                </form>
            )}
        </Formik>
    </div>
);
export default SignupForm