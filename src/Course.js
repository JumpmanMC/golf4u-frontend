import React from "react"

function Course(props) {
    return (
        <div className="course">
            <h1>{props.name}</h1>
            <p>Number of holes: {props.holes}</p>
            <p>Par: {props.par}</p>
        </div>
    )
}

export default Course