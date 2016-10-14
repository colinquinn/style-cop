import React, { Component } from 'react'
import '../../styles/css/Styles.css'
import Magic from 'react-icons/lib/fa/magic'
import { clone } from '../clone'

export class Button extends Component {
    
    constructor(props) {
        super(props)

        this.state = { counter: 0 }
    }

    addToCounter = () => {
        this.props.addToCount()

        this.setState(
            clone(this.state).with({ counter: this.state.counter + 1 })
        )
    }

    render() {
        return (
            <div className="AssignButton">
                <a>
                    <button onClick={this.addToCounter}>
                            <h2>Update Counter: [{this.state.counter}] <Magic /></h2>
                    </button>
                </a>
            </div>
        )
    }
}
