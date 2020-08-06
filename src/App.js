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
      addingCourse: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        addingCourse: !prevState.addingCourse
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
            <button className="addButton" onClick={this.handleClick}>Add Course</button>
            <div className="divider"></div>
            <button className="deleteButton">Delete Course</button>
          </div>
          {this.state.addingCourse ? <SignupForm/> : <div></div>}
        </div>
    )
  }
}

export default App;