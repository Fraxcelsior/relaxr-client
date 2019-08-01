import React from 'react'
import { connect } from 'react-redux'
import { createJournal } from '../../actions/journal'
import JournalForm from './JournalForm';

class JournalFormContainer extends React.Component {
    state = {
        title: '',
        description: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.createJournal(this.state)
        this.setState({
            title: '',
            description: ''
        })
    }

    render() {
        return (
        <JournalForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
        />
        )
    }
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { createJournal })(JournalFormContainer)