import React from 'react'
import '../../styles/css/Styles.css'
import { ListBox } from '../containers/ListBox'
import { Button } from '../components/Button'

export class ListBoxContainer extends React.Component {
    render() {
        return (
            <div className="ListBoxContainer">
                <h1> {this.props.title} </h1>
                <ListBox frontOrBack={this.props.frontOrBack} store={this.props.store} />
                <Button count={0} />
            </div>
        )
    }
}
