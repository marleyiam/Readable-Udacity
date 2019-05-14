import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import Dashboard from './Dashboard';
import NewPost from './NewPost';
import PostDetail from './PostDetail';

class App extends Component {

  render() {
    return (
      <div>
        <LoadingBar showFastActions />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/new' exact component={NewPost} />
          <Route path='/:id' exact component={PostDetail} />
          <Route path='/category/:category' exact component={Dashboard} />
          <Route path='/author/:name' exact component={Dashboard} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect()(App));