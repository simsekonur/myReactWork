import React, { Component } from 'react'

export class FirstComp extends Component {
    render() {
        return (
            <div>
                <p>Hi {this.props.name} from my first component</p>
            </div>
        )
    }
}

export default FirstComp
