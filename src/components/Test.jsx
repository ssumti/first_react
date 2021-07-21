import React, { Component } from 'react'
import { render } from 'react-dom'

class Test extends Component {
    state = {
        isClicked: false
    }
    render() {
        return (
            <React.Fragment>
                <p>Do you want to make more money?</p>
                <a onClick={this.check}>Click Me</a>
                {this.state.isClicked ? <p id="idd">https://www.google.com</p> : <p id="idd"></p>}
            </React.Fragment>
        )
    }
    check = () => {
        this.state.isClicked ? this.setState({ isClicked: false }) : this.setState({ isClicked: true })
    }
}
export default Test