import React, { Component } from 'react'
import { connect } from 'react-redux'
import Journal from './Journal'
import {fetchJournal} from '../../actions/journal'


class JournalContainer extends Component {

    //id = this.props.match.params.id
    id = 1

    componentDidMount() {
        this.props.fetchJournal(this.id)
    }
    render() {
        if (!this.props.journalDetails) return 'Loading...'
        return (
            <div>
                <div className='container'>
                    <Journal
                        details={this.props.journalDetails}
                       />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    journalDetails: state.journal
    //lobby: state.lobby,
})

export default connect(mapStateToProps, {fetchJournal})(JournalContainer)