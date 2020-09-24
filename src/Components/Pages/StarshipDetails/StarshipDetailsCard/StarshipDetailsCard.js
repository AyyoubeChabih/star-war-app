import React from 'react';
import { Card } from '../../../Core';

export const StarshipDetailsCard = ({ starship }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Model: </span>
      {starship.model}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Starship Class: </span>
      {starship.starship_class}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Manufacturer: </span>
      {starship.manufacturer}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Cost In Credits: </span>
      {starship.cost_in_credits}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Length: </span>
      {starship.length}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Crew: </span>
      {starship.crew}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Passengers: </span>
      {starship.passengers}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Max Atmosphering Speed: </span>
      {starship.max_atmosphering_speed}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Hyperdrive Rating: </span>
      {starship.hyperdrive_rating}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Maximum Number of Megalights: </span>
      {starship.MGLT}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Cargo Capacity: </span>
      {starship.cargo_capacity}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Consumables: </span>
      {starship.consumables}
    </div>
  </Card>
);
