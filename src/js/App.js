import React from 'react'
import '../styles/css/Styles.css'
import { ListBoxContainer } from './containers/ListBoxContainer'
import UserSecret from 'react-icons/lib/fa/user-secret'
import { clone } from './clone'

export class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    propTypes = {
        store: React.PropTypes.object.isRequired
    }

    addToCounter = () => {
        this.setState(
            clone(this.state).with({
                counter: this.state.counter + 1
            })
        )
    }

    render() {
        return (
            <div>
                <div className="AppHeader">
                    <h1> Style Cop <UserSecret /></h1>
                </div>
                <div>
                    <ListBoxContainer title="Front End Developers" data={ this.props.store.frontEnd } addToCount={this.addToCounter}/>
                </div>
                <div>
                    <ListBoxContainer title="Back End Developers" data={ this.props.store.backEnd } addToCount={this.addToCounter}/>
                </div>
                <div>
                    <h2>
                        Total Count: { this.state.counter }
                    </h2>
                </div>    
            </div>
        )
    }
}
