import React, { Component } from 'react'
import '../../styles/css/Styles.css'
import Magic from 'react-icons/lib/fa/magic'
import { createFrontEndClickAction, createBackEndClickAction } from '../actions'
import { FrontOrBackEnd } from '../App'

export class Button extends Component {

    render() {
        let count = this.props.frontOrBack === FrontOrBackEnd.FRONT_END
            ? this.props.store.frontEndCount
            : this.props.store.backEndCount

        return (
            <div className="AssignButton">
                <a>
                    <button onClick={this.addToCounter}>
                            <h2>Update Counter: [{count}] <Magic /></h2>
                    </button>
                </a>
            </div>
        )
    }
}
