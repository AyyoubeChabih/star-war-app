import React from 'react';
import { Card } from '../../../Core';

export const SpecieDetailsCard = ({ specie }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Classification: </span>
      {specie.classification}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Designation: </span>
      {specie.designation}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Average Height: </span>
      {specie.average_height}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Average Lifespan: </span>
      {specie.average_lifespan}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Eye Colors: </span>
      {specie.eye_colors}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Hair Colors: </span>
      {specie.hair_colors}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Skin Colors: </span>
      {specie.skin_colors}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Language: </span>
      {specie.language}
    </div>
  </Card>
);
