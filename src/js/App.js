import React from 'react'
import '../styles/css/Styles.css'
import { ListBoxContainer } from './containers/ListBoxContainer'
import UserSecret from 'react-icons/lib/fa/user-secret'

export var FrontOrBackEnd = {
    FRONT_END: 0,
    BACK_END: 1
}

export class App extends React.Component {

    render() {
        return (
            <div>
                <div className="AppHeader">
                    <h1> Style Cop <UserSecret /></h1>
                </div>
                <div>
                    <ListBoxContainer title="Front End Developers" frontOrBack={FrontOrBackEnd.FRONT_END} store={this.props.store} />
                </div>
                <div>
                    <ListBoxContainer title="Back End Developers" frontOrBack={FrontOrBackEnd.BACK_END} store={this.props.store} />
                </div>
                <h2>Total Count: {this.props.store.backEndCount + this.props.store.frontEndCount}</h2>
            </div>
        )
    }
}
