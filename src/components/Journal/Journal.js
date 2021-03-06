import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Journal extends Component {
    render() {
        return (
            <div>
                <p>User: Default</p>
                <p>Journal entries:</p>
                <ul>
                    {this.props.journals.map(entry =>
                        <li key={entry.id}><strong>Title: </strong><Link to={`/journal/${entry.id}`}>{entry.title}</Link><br></br><strong>Posted at: </strong>{entry.created_at}</li>
                    )}
                </ul>
                
            </div>
        )
    }
}

/*
<p>List of videos:</p>
                <ul>
                    {this.props.details.journal.videos.map(vid =>
                        <iframe width="916" height="687" src={`https://www.youtube.com/embed/${vid}`} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    )}
                </ul>
                {console.log('VIDURL!!!:', `https://www.youtube.com/embed/${this.props.details.journal.videos[1]}`)},
*/