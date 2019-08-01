import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dashboard from './Dashboard';

class DashboardContainer extends React.Component {
    state = {
            user: 'Default'
    }
    
    
    render() {
        return (
            <div>
                <Dashboard user={this.state.user}/>
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        
    })

export default connect(mapStateToProps)(DashboardContainer)
