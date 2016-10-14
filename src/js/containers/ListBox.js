import React from 'react'
import { ListItem } from '../components/ListItem'

export class ListBox extends React.Component {
    render() {
        return (
            <div>
                {this.props.data.map(( datum ) => (
                    <ListItem name={datum.name} specialty={datum.specialty} cop={datum.cop} />
                ))}
            </div>
        )
    }
}
