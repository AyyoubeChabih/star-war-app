import React from 'react';
import './movieList.css';
import { Item } from './Item';

export const MovieList = ({ items }) => (
  <div className="movie-list">
    {items.map((movie, index) => (
      <Item key={movie.episode_id} data={movie} id={index} />
    ))}
  </div>
);
