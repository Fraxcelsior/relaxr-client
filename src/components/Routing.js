import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import JournalContainer from './Journal/JournalContainer';

function Routing(props) {
  return (<div>
      <Switch>
        <Route path="/journal" exact component={JournalContainer} />
        <Route path="" render={() => <Redirect to="/journal" />} />
      </Switch> 
  </div>)
}

const mapStateToProps = state => ({
  authenticated: !!state.user
})

export default withRouter(connect(mapStateToProps)(Routing))