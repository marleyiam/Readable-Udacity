import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { 
  formatDate,
  generateUID,
  getFormData
} from '../utils/helpers';

import {
  TiThumbsUp,
  TiThumbsDown,
  TiEdit,
  TiTrash
} from 'react-icons/ti';

import { 
  handleGetPost,
  handleVote,
  handleEditPost,
  handleDeletePost
} from '../actions/posts';

import { 
  handleGetComments,
  handleAddComment
} from '../actions/comments';

import { handleGetCategories } from '../actions/categories';

import { 
  HOME_PATH,
  USER,
  UP_VOTE,
  DOWN_VOTE,
  UPDATE_POST_TITLE,
  SAVE_COMMENT_TITLE,
  UPDATE_COMMENT_TITLE
} from '../utils/constants';

import CommentForm from './CommentForm';
import PostForm from './PostForm';
import Comments from './Comments';

import Modal from 'react-modal';
Modal.setAppElement('#root');

class PostDetails extends Component {

  state = {
    postModalIsOpen: false,
  };
  
  componentDidMount() {
    const { id } = this.props.match.params;
    const { dispatch } = this.props;
    dispatch(handleGetPost(id));
    dispatch(handleGetComments(id));
    dispatch(handleGetCategories());
  }

  openPostModal = () => {
    this.setState({postModalIsOpen: true});
  }

  closePostModal = () => {
    this.setState({postModalIsOpen: false});
  }

  onPressBack = (event) => {
    event.preventDefault();
    this
      .props
      .history
      .push(HOME_PATH);
  };

  onAddComment = (event) => {
    event.preventDefault();

    const comment = getFormData(event);

    comment.author = USER;
    comment.id = generateUID();
    comment.timestamp = new Date().getTime();
    comment.parentId = this.props.post.id;

    this
      .props
      .dispatch(handleAddComment(comment));

    this
      .props
      .post
      .commentCount++;
  }

  onVoteUp = (post) => {
    this.props.dispatch(handleVote(post, UP_VOTE));
  };

  onVoteDown = (post) => {
    this.props.dispatch(handleVote(post, DOWN_VOTE));
  };

  onEditPost = (event) => {
    event.preventDefault();

    const post = getFormData(event, this.props.post);

    this
      .props
      .dispatch(handleEditPost(post));

    this.closePostModal();
  }

  onRemovePost = (event, post) => {
    event.preventDefault();
 
    this
      .props
      .dispatch(handleDeletePost(post));

    this
      .props
      .history
      .push(HOME_PATH);
  }

  render() {
    
    const { post, comments, categories } = this.props;

    return ( 
      !post? null :
      <div className='container-post-detail-box'>
        <div className='box header'>Projeto Leitura</div>
        <div className='box horizon'>
          <ul>
            <li>
              <a onClick={this.onPressBack}>Voltar</a>
            </li>
          </ul>
        </div>
        <div className='center post-detail-box'>
          <div className='post-detail'>
              <div className='post-info'>
                <div>
                  <span>
                    {post.title}
                  </span>
                    <div></div>
                    {
                      <span className='published-at'>
                        <strong>Publicado em: </strong>
                        {formatDate(post.timestamp)} na categoria <i><u>{post.category}</u></i>
                      </span> 
                    }
                    <p>
                      <strong>Por: </strong>{post.author}
                    </p>
                </div>
                <div className='post-body'>
                  {post.body}
                </div>
                <div></div>
                <hr className='divider'></hr>
                <div className='post-icons' style={{position: 'relative'}}>
                  <span className='post-voting-counter'>{post.voteScore !== 0 && post.voteScore}</span>
                  <span style={{paddingTop: '0.9%'}}>
                    <TiThumbsUp 
                      className='post-icon' 
                      style={{color: '#4183c4'}}
                      onClick={() => this.onVoteUp(post)}
                    />
                    <TiThumbsDown 
                      className='post-icon' 
                      style={{color: '#ff5e5c'}}
                      onClick={() => this.onVoteDown(post)}
                    />
                  </span>
                  <span>{post.commentCount !== 0 && `${post.commentCount} Comentários`}</span>
                  <span className='far-right' style={{paddingTop: '0.9%'}}>
                    <TiEdit
                      className='post-icon' 
                      style={{fontSize:'23px'}}
                      onClick={this.openPostModal}
                    />
                    <TiTrash
                      className='post-icon' 
                      style={{fontSize:'23px'}}
                      onClick={(event) => this.onRemovePost(event, post)}
                    />
                  </span>
                </div>
                <Modal
                  isOpen={this.state.postModalIsOpen}
                  onRequestClose={this.closePostModal}
                  overlayClassName='modal-overlay'
                >
                  <PostForm
                    label={UPDATE_POST_TITLE}
                    post={post}
                    categories={categories}
                    onClick={(event) => this.onEditPost(event)}
                  />
                </Modal>
            </div>
          </div>
        </div>
        <CommentForm 
          onSubmit={this.onAddComment} 
          label={SAVE_COMMENT_TITLE}
        />
        {
          comments && <Comments
            post={post}
            comments={comments} 
            label={UPDATE_COMMENT_TITLE}
          />
        }
        <div className='box footer'>
          <div>Udacity 2019</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer, commentsReducer, categoriesReducer }) => {
  return {
    post: postsReducer.post,
    comments: commentsReducer.comments.sort((a, b) => b.timestamp - a.timestamp),
    categories: categoriesReducer.categories 
  };
};

export default withRouter(connect(mapStateToProps)(PostDetails));