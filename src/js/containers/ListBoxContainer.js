import React from 'react'
import '../../styles/css/Styles.css'
import { ListBox } from '../containers/ListBox'
import { Button } from '../components/Button'
import { FrontOrBackEnd } from '../App'
import { createClickCountButton } from '../actions'

export class ListBoxContainer extends React.Component {

    clickTheButton = () => {
        this.props.store.dispatch(createClickCountButton(this.props.frontOrBack))
    }

    render() {
        let count = this.props.frontOrBack === FrontOrBackEnd.FRONT_END
            ? this.props.store.frontEndCount
            : this.props.store.backEndCount 

        return (
            <div className="ListBoxContainer">
                <h1> {this.props.title} </h1>
                <ListBox frontOrBack={this.props.frontOrBack} store={this.props.store} />
                <Button count={count} onClick={this.clickTheButton} />
            </div>
        )
    }
}
