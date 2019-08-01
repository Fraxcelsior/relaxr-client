import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Default's dashboard</h1>
                <p>Need to calm down immediately? Focus on your breathing and sync it with the image below:</p>
                <img src='https://media2.giphy.com/media/8YfwmT1T8PsfC/giphy.gif' alt='Breathing excercise' />
                <br></br>
                <Link to={'/journal'}> Go to your journal</Link>
                <br></br>
                <Link to={'/videos'}> Go to your relaxation videos</Link>
            </div>
        )
    }
}

/*
                <Link to={'/videos'}> Go t your relaxation viseos</Link>

*/