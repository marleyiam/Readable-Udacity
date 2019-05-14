import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddPost } from '../actions/posts';
import { handleGetCategories } from '../actions/categories';
import { 
  generateUID,
  getFormData 
} from '../utils/helpers';

import { 
  HOME_PATH,
  SAVE_POST_TITLE 
} from '../utils/constants';

import PostForm from './PostForm';

class NewPost extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetCategories());
  }

  onPressBack = (event) => {
    event.preventDefault();
    this
      .props
      .history
      .push(HOME_PATH);
  };

  onAddPost = (event) => {
    event.preventDefault();

    const post = getFormData(event);

    post.id = generateUID();
    post.timestamp = new Date().getTime();

    this
      .props
      .dispatch(handleAddPost(post));

    this
      .props
      .history
      .push(HOME_PATH);
  }

  render() {

    const { categories } = this.props;

    return (
      <div className='container-form-box'>
        <div className='box header'>Projeto Leitura</div>
        <div className='box horizon'>
          <ul>
            <li>
              <a onClick={this.onPressBack}>Voltar</a>
            </li>
          </ul>
        </div>
        <PostForm
          label={SAVE_POST_TITLE}
          categories={categories}
          onClick={(event) => this.onAddPost(event)}
        />
        <div className='box footer'>
          <div>Udacity 2019</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categoriesReducer }) => {
  return {
    categories: categoriesReducer.categories
  }
}

export default withRouter(connect(mapStateToProps)(NewPost));