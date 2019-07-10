import React, { Component } from 'react'
import data from '../data'

export default class FavoriteMovies extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="favoriteMovies">
                {`${data[this.props.currIndex].favoriteMovies}`}
            </div>
        )
    }
}