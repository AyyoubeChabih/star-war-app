import React from 'react';
import { Card } from '../../../Core/Card';

export const PeopleDetailsCard = ({ person }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Birth Year: </span>
      {person.birth_year}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Eye Color: </span>
      {person.eye_color}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Gender: </span>
      {person.gender}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Hair Color: </span>
      {person.hair_color}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Height: </span>
      {person.height}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Mass: </span>
      {person.mass}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Skin Color: </span>
      {person.skin_color}
    </div>
  </Card>
);
