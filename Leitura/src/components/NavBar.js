import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleGetCategories } from '../actions/categories';
import { capitalize } from '../utils/helpers';
import { withRouter } from 'react-router-dom';
import { HOME } from '../utils/constants';

class Navbar extends Component {

  state = {
    selected: ''
  };

  handleChange = (event, category) => {
    event.preventDefault();
    const categoryPath = category? category.name : '';
    this.setState({selected: categoryPath});

    this
      .props
      .history
      .push(`/category/${categoryPath}`);
  };

  render() {

    const { category } = this.props.match.params;
    let { selected } = this.state;

    selected = selected?
    (selected !== HOME ? selected : category)
    : category;

    const { categories } = this.props;

    return (
      <ul>
        {
          categories.map(category => {
            return <li className={selected === category.name && 'selected'} key={category.name}>
              <a 
                href={`/category/${category.name}`}
                onClick={event => this.handleChange(event, category)}
              >
                {capitalize(category.name)}
              </a>
            </li>
          })
        }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  const { categoriesReducer } = state;
  return {
    categories: categoriesReducer.categories
  };
};

const mapDispatchToProps = dispatch => dispatch(handleGetCategories());

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));