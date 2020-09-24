import React from 'react';
import { Card } from '../../../Core';

export const PlanetDetailsCard = ({ planet }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Diameter: </span>
      {planet.diameter}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Rotation Period: </span>
      {planet.rotation_period}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Orbital Period: </span>
      {planet.orbital_period}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Gravity: </span>
      {planet.gravity}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Population: </span>
      {planet.population}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Climate: </span>
      {planet.climate}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Terrain: </span>
      {planet.terrain}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Surface Water: </span>
      {planet.surface_water}
    </div>
  </Card>
);
