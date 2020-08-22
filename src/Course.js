import React from "react"

class Course extends React.Component {

    constructor() {
        super()
        this.state = {
            deleted: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleModify = this.handleModify.bind(this);
    }

    render() {
        return (
            <div className="course">
                <h1>{this.props.name}</h1>
                <p>Number of holes: {this.props.holes}</p>
                <div className="courseDiv" class="flexbox-container">
                    <p className="parText">Par: {this.props.par}</p>
                    <div>
                        <button className={"modifyButton"} onClick={this.handleModify}><i className="fa fa-pencil"></i></button>
                        {this.props.deleting ? <button className={"deletionButton"} onClick={this.handleDelete}><i class="fa fa-close"></i></button> : <div></div>}
                    </div>
                </div>
            </div>)
    }

    handleDelete() {
        this.setState(prevState => {
            return {
                deleted: true
            }
        })
    }

    handleModify() {
        /**
         * Filler method for modify onClick
         */
        this.props.modify();
    }
}

export default Course