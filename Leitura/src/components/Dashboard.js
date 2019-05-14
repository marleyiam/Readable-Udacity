import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleGetInitialData } from '../actions/shared';
import { handleVote } from '../actions/posts';

import { 
  HOME, 
  UP_VOTE, 
  DOWN_VOTE 
} from '../utils/constants';

import NavBar from './NavBar';
import SideBar from './SideBar';
import Post from './Post';

class Dashboard extends Component {

  componentDidMount() {
    this
      .props
      .dispatch(handleGetInitialData());
  }

  onVoteUp = post => {
    this.props.dispatch(handleVote(post, UP_VOTE));
  };

  onVoteDown = post => {
    this.props.dispatch(handleVote(post, DOWN_VOTE));
  };

  render() {

    const { posts } = this.props;

    return (

      <div className='container-box'>
        <div className='box header'>Projeto Leitura</div>
        <div className='box menu-vertical'>
          <NavBar/>
        </div>
        <div className='box aside'>
          <SideBar/>
        </div>
        <div className='box content'>
          <ul className='dashboard-list'>
            {
              posts && posts.map(post => {
                return (
                  <li key={post.id}>
                    <Post 
                      post={post}
                      onVoteUp={() => this.onVoteUp(post)}
                      onVoteDown={() => this.onVoteDown(post)}
                    />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='box footer'>
          <div>Udacity 2019</div>
        </div>
      </div>
    )
  }
}

//state, ownProps?
function mapStateToProps({ postsReducer }, props) {

  const { name, category } = props.match.params;
  
  if (name) {
    return { 
      posts: postsReducer.posts.filter(post => post.author === name),
      category
    }
  }

  if (category && category !== HOME) {
    return { 
      posts: postsReducer.posts.filter(post => post.category === category),
      category,
    }
  }

  return { 
    posts: postsReducer.posts,
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));