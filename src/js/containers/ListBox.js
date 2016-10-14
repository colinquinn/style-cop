import React from 'react'
import { ListItem } from '../components/ListItem'
import { FrontOrBackEnd } from '../App'
import { createSetCopAction } from '../actions'

export class ListBox extends React.Component {
    setCop = (name) => {
        this.props.store.dispatch(
            createSetCopAction(name, this.props.frontOrBack)
        )
    }
    
    render() {
        let data = this.props.frontOrBack === FrontOrBackEnd.FRONT_END
            ? this.props.store.frontEnd
            : this.props.store.backEnd
             
        return (
            <div>
                {data.map(( datum ) => (
                    <ListItem name={datum.name} specialty={datum.specialty} cop={datum.cop} 
                        onClick={() => this.setCop(datum.name)}/>
                ))}
            </div>
        )
    }
}
