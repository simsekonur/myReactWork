import React, { Component } from 'react'

export class PropSubject extends Component {
    render() {
        return (
            <div>
                <p> Hello {this.props.name } from props</p>
            </div>
        )
    }
}

export default PropSubject
