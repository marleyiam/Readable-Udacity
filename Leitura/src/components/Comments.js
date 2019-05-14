import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormData } from '../utils/helpers';
import { UP_VOTE, DOWN_VOTE } from '../utils/constants';

import {
  handleVoteComment,
  handleEditComment,
  handleRemoveComment
} from '../actions/comments';

import Comment from './Comment';

class Comments extends Component {

  onCommentVoteUp = (comment) => {
    this.props.dispatch(handleVoteComment(comment, UP_VOTE));
  };

  onCommentVoteDown = (comment) => {
    this.props.dispatch(handleVoteComment(comment, DOWN_VOTE));
  };

  onEditComment = (event, commentContext) => {
    event.preventDefault();

    const comment = getFormData(event, commentContext.comment);

    this
      .props
      .dispatch(handleEditComment(comment));

      commentContext.closeCommentModal();
  }

  onRemoveComment = (event, comment) => {
    event.preventDefault();

    this
      .props
      .dispatch(handleRemoveComment(comment));

    this
      .props
      .post
      .commentCount--;
  }

  render() {

    const { post, comments, label } = this.props;

    return (
      <div className='comments'>
      {
        post.commentCount && post.commentCount > 0?
        (
          <div>
            <h2>Comentários</h2>
            <ul>
              {comments && comments.map(comment => {
                return (  
                  <li key={comment.id}>
                    <Comment 
                      comment={comment}
                      onVoteUp={() => this.onCommentVoteUp(comment)}
                      onVoteDown={() => this.onCommentVoteDown(comment)}
                      onSubmit={this.onEditComment}
                      onRemoveComment={this.onRemoveComment}
                      label={label}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        ):null
      }
    </div>
    );
  }
}
 
export default connect()(Comments);