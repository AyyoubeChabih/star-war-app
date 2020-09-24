import React from 'react';
import { Card } from '../../../Core';

export const VehicleDetailsCard = ({ vehicle }) => (
  <Card title="Details" extraClass="largeCard">
    <div>
      <span style={{ fontWeight: 600 }}>Model: </span>
      {vehicle.model}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Vehicle Class: </span>
      {vehicle.vehicle_class}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Manufacturer: </span>
      {vehicle.manufacturer}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Length: </span>
      {vehicle.length}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Cost In Credits: </span>
      {vehicle.cost_in_credits}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Crew: </span>
      {vehicle.crew}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Passengers: </span>
      {vehicle.passengers}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Max Atmosphering Speed: </span>
      {vehicle.max_atmosphering_speed}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Cargo Capacity: </span>
      {vehicle.cargo_capacity}
    </div>
    <div>
      <span style={{ fontWeight: 600 }}>Consumables: </span>
      {vehicle.consumables}
    </div>
  </Card>
);
