import React from 'react'
import { connect } from 'react-redux'
import { loadJournalDetails } from '../../actions/journal'
import JournalDetails from './JournalDetails';

class JournalDetailsContainer extends React.Component {
    // canEdit will allow the user to edit the ticket
    state = {
        canEdit: false
    }

    componentDidMount() {
        this.props.loadJournalDetails(Number(this.props.match.params.id))
    }
    /*
    onEdit = () => {
        this.setState({
            // Allow editing, set starting fields to current details (via redux state)
            canEdit: true,
            formContent: {
                name: this.props.journal.title,
                description: this.props.journal.description,
            }
        })
    }

    onChange = (event) => {
        // update the formContent property with the new data from the input field
        this.setState({
            formContent: {
                ...this.state.formContent,
                [event.target.name]: event.target.value
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        //if(!this.props.user) return alert('Please login before posting')
        //if(!this.props.user.id !== this.props.ticket.userId) return alert('You can not edit the ticket of someone else!')
        this.setState({
            canEdit: false
        })
        this.props.updateTicket(this.state.formContent, Number(this.props.match.params.id))
        //this.props.getRisk(Number(this.props.match.params.id))
    }
    */
    render() {
        return (
            < JournalDetails journalDetails={this.props.journalDetails}
            />
        )
    }
}

const mapStateToProps = state => ({
    journalDetails: state.journalDetails
})

export default connect(mapStateToProps, { loadJournalDetails })(JournalDetailsContainer)
