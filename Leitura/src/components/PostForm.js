import React, { Component } from 'react';
import { HOME } from '../utils/constants';

export default class PostForm extends Component {

  state = {
    title: '',
    author: '',
    category: '',
    body: ''
  }

  componentDidMount() {
    if (this.props.post) {
      const { post } = this.props;
      this.setState(
        {
          title: post.title,
          author: post.author,
          category: post.category,
          body: post.body
        }
      );
    }
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  render() {

    const { label, categories, onClick } = this.props;

    return (
      <div className='center form-box'>
        <h3 className='new-post-title'>{label}</h3>
        <form className='new-post' onSubmit={(event) => onClick(event)}>
          <label htmlFor='title'>Título</label>
          <br></br>
          <input onChange={(event) => this.handleChange(event)} value={this.state.title} type='text' id='title' name='title' placeholder='O título do seu post' required></input>
          <br></br>
          <label htmlFor='author'>Autor</label>
          <br></br>
          <input onChange={(event) => this.handleChange(event)} value={this.state.author} type='text' id='author' name='author' placeholder='O nome do autor' required></input>
          <br></br>
          <label htmlFor='categories'>Categoria</label>
          <br></br>
          <select
            onChange={(event) => this.handleChange(event)}
            value={this.state.category}
            id='categories' 
            name='category'
          >
            {
              categories &&
              categories
              .filter(category => category.name !== HOME)
              .map(category => {
                return (
                  <option 
                    selected={category.name === this.state.category} 
                    key={category.name} 
                  >
                    {category.name}
                  </option>
                )
              })
            }
          </select>
          <br></br>
          <label htmlFor='content'>Texto</label>
          <br></br>
          <textarea 
            onChange={(event) => this.handleChange(event)}
            value={this.state.body}
            id='text'
            name='body'
            placeholder='Escreva o texto do seu post'
            className='textarea'
            required
          />
          <div></div>
          <div style={{ margin: '3%' }}>
            <button className='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}