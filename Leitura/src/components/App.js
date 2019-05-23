import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import Dashboard from './Dashboard';
import NewPost from './NewPost';
import PostDetail from './PostDetail';
import Page404 from './Page404';

class App extends Component {

  render() {
    return (
      <div>
        <LoadingBar showFastActions />
        <Switch>
          <Route exact path='/new' component={NewPost} />
          <Route exact path='/author/:name' component={Dashboard} />
          <Route exact path='/:category?' component={Dashboard} />
          <Route exact path='/:category/:id' component={PostDetail} />
          <Route component={Page404} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(App));