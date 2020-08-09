import React from 'react';
import './App.css';
import SignupForm from "./addForm";
import Course from "./Course";
import courseData from "./courseData";

const courseComponents = courseData.map(course => <Course key={course.id}
                                                          par={course.par}
                                                          holes={course.holes}
                                                          name={course.name}/>)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            addingCourse: false,
            deletingCourse: false
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd() {
        this.setState(prevState => {
            return {
                addingCourse: !prevState.addingCourse,
                deletingCourse: false
            }
        })
    }

    handleDelete() {
        this.setState(prevState => {
            return {
                addingCourse: false,
                deletingCourse: !prevState.deletingCourse
            }
        })
    }

    render() {
        return (
            <div>
                <h1 className="title">Untitled Golf App</h1>
                <div className="courseList">
                    {courseComponents}
                </div>
                <br/>
                <div className="buttons">
                    {!this.state.addingCourse ?
                     <button className="addButton" onClick={this.handleAdd}>Add Course</button> :
                     <button className="addButtonClicked" onClick={this.handleAdd}>Add
                         Course</button>}
                    <div className="divider"></div>
                    {!this.state.deletingCourse ?
                     <button className="deleteButton" onClick={this.handleDelete}>Delete Course</button> :
                     <button className="deleteButtonClicked" onClick={this.handleDelete}>Delete Course</button>}

                </div>
                {this.state.addingCourse ? <SignupForm/> : <div></div>}
            </div>
        )
    }
}

export default App;