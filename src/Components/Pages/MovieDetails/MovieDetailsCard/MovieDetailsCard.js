import React from 'react';
import { Card } from '../../../Core';

export const MovieDetailsCard = ({ movie }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Director: </span>
      {movie.director}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Opening Crawl: </span>
      {movie.opening_crawl}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Producer: </span>
      {movie.producer}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Release Date: </span>
      {movie.release_date}
    </div>
  </Card>
);
