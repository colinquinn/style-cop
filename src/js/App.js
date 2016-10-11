import React from 'react'
import '../styles/css/Styles.css'
import ListBoxContainer from './containers/ListBoxContainer'
import UserSecret from 'react-icons/lib/fa/user-secret'
import * as DEVELOPERS from '../../developers.json'

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="AppHeader">
                    <h1> Style Cop <UserSecret /></h1>
                </div>
                <div>
                    <ListBoxContainer title="Front End Developers" data={ DEVELOPERS.frontEnd }/>
                </div>
                <div>
                    <ListBoxContainer title="Back End Developers" data={ DEVELOPERS.backEnd }/>
                </div>
            </div>
        )
    }
}
export default App
