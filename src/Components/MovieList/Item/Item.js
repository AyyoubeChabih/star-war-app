import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';
import { Card } from '../../Core';

export const Item = ({ data, id }) => (
  <Card title={data.title} extraClass="hover">
    <span>{data.release_date.substring(0, 4)}</span>
    <Link className="item-view" to={`/movie/${id + 1}`}>
      <span>&#10140;</span>
    </Link>
  </Card>
);
