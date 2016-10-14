import React from 'react'
import '../../styles/css/Styles.css'
import { ListBox } from '../containers/ListBox'
import { Button } from '../components/Button'
import { FrontOrBackEnd } from '../App'

export class ListBoxContainer extends React.Component {
    render() {
        let data = this.props.frontOrBack === FrontOrBackEnd.FRONT_END 
            ? this.props.store.frontEnd
            : this.props.store.backEnd

        return (
            <div className="ListBoxContainer">
                <h1> {this.props.title} </h1>
                <ListBox frontOrBack={this.props.frontOrBack} store={this.props.store} />
                <Button frontOrBack={this.props.frontOrBack} store={this.props.store} />
            </div>
        )
    }
}
