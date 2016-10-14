import React from 'react'
import '../styles/css/Styles.css'
import { ListBoxContainer } from './containers/ListBoxContainer'
import UserSecret from 'react-icons/lib/fa/user-secret'

export class App extends React.Component {

    propTypes = {
        store: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <div className="AppHeader">
                    <h1> Style Cop <UserSecret /></h1>
                </div>
                <div>
                    <ListBoxContainer title="Front End Developers" data={ this.props.store.frontEnd }/>
                </div>
                <div>
                    <ListBoxContainer title="Back End Developers" data={ this.props.store.backEnd }/>
                </div>
            </div>
        )
    }
}
