import React, { Component } from 'react'
import data from '../data'

export default class City extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="city">
                {`${data[this.props.currIndex].city}`}
            </div>
        )
    }
}