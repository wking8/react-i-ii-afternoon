import React, { Component } from 'react'
import data from '../data'

export default class Name extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="name">
                {`${data[this.props.currIndex].name.first} ${data[this.props.currIndex].name.last}`}
            </div>
        )
    }
}