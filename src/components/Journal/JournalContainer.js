import React, { Component } from 'react'
import { connect } from 'react-redux'
import Journal from './Journal'
import {fetchJournal} from '../../actions/journal'
import JournalFormContainer from './JournalFormContainer';


class JournalContainer extends Component {

    //id = this.props.match.params.id
    id = 1

    componentDidMount() {
        this.props.fetchJournal(this.id)
    }
    render() {
        if (!this.props.journalList) return 'Loading...'
        return (
            <div>
                <div>
                    <Journal
                        journals={this.props.journalList}
                       />
                    <JournalFormContainer />
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    journalList: state.journal
    //lobby: state.lobby,
})

export default connect(mapStateToProps, {fetchJournal})(JournalContainer)