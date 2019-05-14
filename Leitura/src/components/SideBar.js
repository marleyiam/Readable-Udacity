import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleGetPosts } from '../actions/posts';

import { 
  DATA, 
  VOTE,
  COMMENT,
  NEW_PATH 
} from '../utils/constants';

import { FaPencilAlt } from 'react-icons/fa';

class SideBar extends Component {

  state = {
    orderBy: DATA
  };

  handleClick = () => {
    this
      .props
      .history
      .push(NEW_PATH);
  };

  handleOrderByVote = () => {
    this
      .props
      .dispatch(handleGetPosts(VOTE));
    this.setState({orderBy: VOTE});
  };

  handleOrderByData = () => {
    this
      .props
      .dispatch(handleGetPosts(DATA));
    this.setState({orderBy: DATA});
  };

  handleOrderByComment = () => {
    this
      .props
      .dispatch(handleGetPosts(COMMENT));
    this.setState({orderBy: COMMENT});
  };

  render() {

    const { orderBy } = this.state;

    return (
      <div className='post-save-container'>
        <button className='button' onClick={this.handleClick}>
          <FaPencilAlt/>
          Novo Post
        </button>
        <div className='filter-box'>
          <span>
            <b>Ordenar por</b>
          </span>
          <ul>
            <li
              className={`${orderBy === VOTE && 'filter-selected'}`}
              onClick={this.handleOrderByVote}>Voto</li>
            <li
              className={`${orderBy === DATA && 'filter-selected'}`}
              onClick={this.handleOrderByData}>Data</li>
            <li
              className={`${orderBy === COMMENT && 'filter-selected'}`}
              onClick={this.handleOrderByComment}>Comentários</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(SideBar));