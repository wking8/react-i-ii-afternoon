import React, { Component } from 'react'
import data from '../data'

export default class Employer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="employer">
                {`${data[this.props.currIndex].employer}`}
            </div>
        )
    }
}