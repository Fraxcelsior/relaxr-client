import React, { Component } from 'react'

export default class Journal extends Component {
    render() {
        return (
            <div>
                <p>User: {this.props.details.name}</p>
                <p>Journal</p>
                <p>Diary entries:</p>
                <ul>
                    {this.props.details.journal.diary.map(entry =>
                        <li key={entry.id}>Created at: {entry.dateTime}<br></br> Stress level: {entry.stress_level}<br></br> Description: {entry.description}</li>
                    )}
                </ul>
                <p>List of videos:</p>
                <ul>
                    {this.props.details.journal.videos.map(vid =>
                        <iframe width="916" height="687" src={`https://www.youtube.com/embed/${vid}`} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    )}
                </ul>
                {console.log('VIDURL!!!:', `https://www.youtube.com/embed/${this.props.details.journal.videos[1]}`)},
            </div>
        )
    }
}

