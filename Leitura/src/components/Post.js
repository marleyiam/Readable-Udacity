import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { formatDate } from '../utils/helpers';

import {
  TiThumbsUp,
  TiThumbsDown
} from 'react-icons/ti';

class Post extends Component {
  
  render() {

    const { post } = this.props;

    return (
      <div className='post'>
          <div className='post-info'>
            <div>
              <span>
                <Link to={{
                  pathname:`/${post.category}/${post.id}`,
                  state: {
                    post: post
                  }
                }}>
                  {post.title}
                </Link>
              </span>
                <div></div>
                {
                  <span className='published-at'>
                    <strong>Publicado em: </strong>
                    {formatDate(post.timestamp)} na categoria <i><u><Link to={`/${post.category}`}>{post.category}</Link></u></i>
                  </span> 
                }
                <p>
                  <strong>Por: </strong> <Link to={`/author/${post.author}`}>{post.author}</Link>
                </p>
            </div>

            <div className='post-icons'>
              <span className='post-voting-counter'>{post.voteScore !== 0 && post.voteScore}</span>
              <TiThumbsUp 
                className='post-icon' 
                style={{color: '#4183c4'}}
                onClick={() => this.props.onVoteUp()}
              />
              <TiThumbsDown 
                className='post-icon' 
                style={{color: '#ff5e5c'}}
                onClick={() => this.props.onVoteDown()}
              />
              <span>{post.commentCount !== 0 && `${post.commentCount} Comentários`}</span>
            </div>
        </div>
      </div>
    )
  }
}

export default Post;