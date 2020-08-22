import React from 'react';
import './App.css';
import SignupForm from "./addForm";
import Course from "./Course";
import courseData from "./courseData";
import ModifyForm from "./modifyForm";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            addingCourse: false,
            deletingCourse: false,
            modifyingCourse: false
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleModify = this.handleModify.bind(this);
    }

    handleAdd() {
        this.setState(prevState => {
            return {
                addingCourse: !prevState.addingCourse,
                deletingCourse: false,
                modifyingCourse: false
            }
        })
    }

    handleDelete() {
        this.setState(prevState => {
            return {
                addingCourse: false,
                deletingCourse: !prevState.deletingCourse,
                modifyingCourse: false
            }
        })
    }

    handleModify() {
        this.setState(prevState => {
            return {
                addingCourse: false,
                deletingCourse: false,
                modifyingCourse: !prevState.modifyingCourse
            }
        })
    }

    /*
    componentDidMount() {
        fetch('/api/v1/course')
            .then(response => response.json()
                .then(response => response.map(course => <Course key={course.id}
                                                                 par={course.par}
                                                                 holes={course.holes}
                                                                 name={course.name}
                                                                 deleting={false}
                                                                 modify={this.handleModify}/>))
                .then(data => this.setState({courses: data})));
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        fetch('/api/v1/course')
            .then(response => response.json()
                .then(response => response.map(course => <Course key={course.id}
                                                                 par={course.par}
                                                                 holes={course.holes}
                                                                 name={course.name}
                                                                 deleting={false}
                                                                 modify={this.handleModify}/>))
                .then(data => this.setState({courses: data})));
    }

     */

    render() {
        const courseComponents = courseData.map(course => <Course key={course.id}
                                                                  par={course.par}
                                                                  holes={course.holes}
                                                                  name={course.name}
                                                                  deleting={false}
                                                                  modify={this.handleModify}/>)

        const courseComponentsDeleting = courseData.map(course => <Course key={course.id}
                                                                          par={course.par}
                                                                          holes={course.holes}
                                                                          name={course.name}
                                                                          deleting={true} modify={this.handleModify}/>)
        return (
            <div>
                <h1 className="title">Golf4U</h1>
                <div className="courseList">

                    {this.state.deletingCourse ?
                     <React.Fragment>{courseComponentsDeleting}</React.Fragment> :
                     <React.Fragment>{courseComponents}</React.Fragment>}
                </div>
                <br/>
                <div className="buttons">
                    {!this.state.addingCourse ?
                     <button className="addButton" onClick={this.handleAdd}>Add Course</button> :
                     <button className="addButtonClicked" onClick={this.handleAdd}>Add
                         Course</button>}
                    <div className="divider"/>
                    {!this.state.deletingCourse ?
                     <button className="deleteButton" onClick={this.handleDelete}>Delete
                         Course</button> :
                     <button className="deleteButtonClicked" onClick={this.handleDelete}>Delete
                         Course</button>}

                </div>
                {this.state.addingCourse ? <SignupForm/> : <div/>}
                {this.state.modifyingCourse ? <ModifyForm/> : <div/>}
            </div>
        )
    }
}

export default App;