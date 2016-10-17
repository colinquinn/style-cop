import React, { Component } from 'react'
import '../../styles/css/Styles.css'
import Magic from 'react-icons/lib/fa/magic'

export class Button extends Component {

    render() {
        return (
            <div className="AssignButton">
                <a>
                    <button onClick={null}>
                            <h2>Update Counter: [{this.props.count}] <Magic /></h2>
                    </button>
                </a>
            </div>
        )
    }
}
