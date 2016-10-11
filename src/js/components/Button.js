import React, { Component } from 'react'
import '../../styles/css/Styles.css'
import Magic from 'react-icons/lib/fa/magic'

class Button extends Component {
    render() {
        let counter = 0;
        let updateCounter = () => {
            counter++;
            console.log(counter)
        };
        return (
            <div className="AssignButton">
                <a>
                    <button onClick={() => updateCounter()}>
                            <h2>Update Counter: [{counter}] <Magic /></h2>
                    </button>
                </a>
            </div>
        )
    }
}

export default Button