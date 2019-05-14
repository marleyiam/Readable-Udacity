import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../utils/helpers';

import {
  TiThumbsUp,
  TiThumbsDown,
  TiEdit,
  TiTrash
} from 'react-icons/ti';

import CommentForm from './CommentForm';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const commentModalStyle = {
  content : {
    top:'20%',
    width: '50%',
    height: '50%',
    left: '22.5%'
  }
};

class Comment extends Component {
  
  constructor(props) {
    super(props);
    this.comment = props.comment;
  }
  
  state = {
    commentModalIsOpen: false
  };

  openCommentModal = () => {
    this.setState({commentModalIsOpen: true});
  }

  closeCommentModal = () => {
    this.setState({commentModalIsOpen: false});
  }

  render() {

    this.comment = this.props.comment;

    return (
      <div className='comment'>
        <div className='comment-info'>
          <div>
          <strong style={{fontSize:'15px'}}>{this.comment.author}</strong> comentou em <i>{formatDate(this.comment.timestamp)}</i>
          <div style={{margin:'1%',fontFamily:'serif'}}>{this.comment.body}</div>
          </div>
          <hr className='divider'></hr>
          <div className='post-icons' style={{position:'relative'}}>
            <span className='post-voting-counter'>{this.comment.voteScore !==0 && this.comment.voteScore}</span>
            <TiThumbsUp 
              className='post-icon' 
              style={{color: '#4183c4'}}
              onClick={() => this.props.onVoteUp(this.comment)}
            />
            <TiThumbsDown 
              className='post-icon' 
              style={{color: '#ff5e5c'}}
              onClick={() => this.props.onVoteDown(this.comment)}
            />
            <span className='far-right' style={{paddingTop: '0.9%'}}>
              <TiEdit 
                className='post-icon' 
                style={{fontSize:'23px'}}
                onClick={this.openCommentModal}
              />
              <TiTrash
                className='post-icon'
                style={{fontSize:'23px'}}
                onClick={(event) => this.props.onRemoveComment(event, this.props.comment)}
              />
            </span>
          </div>
        </div>
        <Modal
          isOpen={this.state.commentModalIsOpen}
          onRequestClose={this.closeCommentModal}
          style={commentModalStyle}
          overlayClassName='modal-overlay'
        >
          <CommentForm
            onSubmit={(event) => this.props.onSubmit(event, this)} 
            label={this.props.label}
            comment={this.comment}
          />
        </Modal>
    </div>
    )
  }
}

export default connect()(Comment);