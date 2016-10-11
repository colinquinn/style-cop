import React, { Component } from 'react'
import '../../styles/css/Styles.css'
import HandOLeft from 'react-icons/lib/fa/hand-o-left'

class ListItem extends Component {
    render() {
        const styleCopIcon = this.props.cop ? <HandOLeft /> : null
        const color = (this.props.specialty === "Front End") ? {color: "red"}: {color: "yellow"}

        return (
            <div className="ListItem">
                <h1 style={color}> {this.props.name} {styleCopIcon} </h1>
            </div>
        )
    }
}

export default ListItem