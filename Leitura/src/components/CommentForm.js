import React, { Component } from 'react';

class CommentForm extends Component {

  state = {
    body: ''
  }

  componentDidMount() {
    if (this.props.comment) {
      const { comment } = this.props;
      this.setState({body: comment.body});
    }
  }
  
  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value});
  }

  render() { 
    return (
        <div className='comment-form'>
        <h2>{this.props.label}</h2>
        <form onSubmit={this.props.onSubmit}>
          <br></br>
          <textarea
            onChange={(event) => this.handleChange(event)}
            value={this.state.body}
            id='text'
            name='body'
            placeholder='Escreva seu comentário'
            className='textarea'
            required
          />
          <div style={{ margin: '1%' }}>
            <button className='button'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
 
export default CommentForm;