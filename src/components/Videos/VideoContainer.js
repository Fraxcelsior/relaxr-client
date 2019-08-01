import React, { Component } from 'react'
import { connect } from 'react-redux'
import Video from './Video'

class VideoContainer extends React.Component {
    state = {
        vidId: 'IAODG6KaNBc'
    }
    
    render() {
        return (
            <div>
                <Video vidId={this.state.vidId}/>
            </div>
        )
    }
}
const mapStateToProps = state => (
    {
        
    })

export default connect(mapStateToProps)(VideoContainer)
