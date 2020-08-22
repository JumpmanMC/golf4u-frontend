import React from 'react';
import {Formik} from 'formik';
const ModifyForm = () => (
    <div>
        <Formik
            initialValues={{name: "", holes: "", par: ""}}
            onSubmit={(values, actions) => {
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
                    <button type="submit" className="modifySubmit">Modify</button>
                </form>
            )}
        </Formik>
    </div>
);

export default ModifyForm