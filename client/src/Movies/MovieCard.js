import React from 'react';
import styled from 'styled-components';
import bulma from 'bulma';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="box">
      <h2 className='title is-strong'>{title}</h2>
      <div className="title is-4">
        Director: <em>{director}</em>
      </div>
      <div className="title is-4">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h2 className='title is-3'>Actors:</h2>
        <div className="title is-5">
          {stars}
        </div>
    </div>
  );
};

export default MovieCard;
