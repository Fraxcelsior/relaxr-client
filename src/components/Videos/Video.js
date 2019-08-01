import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        if(!this.props.vidId) return 'Loading video...'
        return (
            <div>
                <h1>Default's videos</h1>
                <p>Need some comfort? How about a relaxing video?</p>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.vidId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

