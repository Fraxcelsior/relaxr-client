import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import {fetchJournal} from '../../actions/journal'


class DashboardContainer extends Component {

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
                    <Dashboard
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

export default connect(mapStateToProps, {fetchJournal})(DashboardContainer)