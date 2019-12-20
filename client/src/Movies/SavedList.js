import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import bulma from 'bulma';
import styled from 'styled-components';

const Page= styled.div`
 
  background-color: F7DC6F;
`;


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3 className='title is-5'>Saved Movies:</h3>
        {this.props.list.map(movie => {
          return (
            <NavLink className='box'
              to={`/movies/${movie.id}`}
              key={movie.id}
              activeClassName="saved-active"
            >
              <span className="column">{movie.title}</span>
            </NavLink>
          );
        })}
        <div className="button is-success">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
