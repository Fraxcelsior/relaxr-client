import React, { Component } from 'react'

export class JournalForm extends Component {
    render() {
        return (
            <div>
                <h2>Create a new journal entry below:</h2>
                <form onSubmit={this.props.onSubmit}>
                    {['title', 'description'].map(fieldName => (
                        <React.Fragment key={fieldName}>
                            <label htmlFor={fieldName}>{fieldName}</label>
                            <br></br>
                            <input
                                id={fieldName}
                                type="text"
                                name={fieldName}
                                value={this.props.values[fieldName]}
                                onChange={this.props.onChange}
                            />
                            <br></br>
                        </React.Fragment>
                    ))}
                    <input type="submit" value="Create event" />
                </form>
            </div>
        )
    }
}

export default JournalForm

