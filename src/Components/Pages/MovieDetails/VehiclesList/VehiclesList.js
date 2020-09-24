import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, GlobalError, Loader, ListItem } from '../../../Core';
import { Context } from '../../../../actions/Provider';
import { actions } from '../../../../helpers/enums';
import './vehiclesList.css';

export const VehiclesList = ({ vehiclesUrls }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: actions.FETCH_VEHICLES_REQUEST,
      payload: { urls: vehiclesUrls, dispatcher: dispatch },
    });
  }, [vehiclesUrls, dispatch]);

  return (
    <>
      {!state.isVehiclesLoadError && state.isVehiclesLoad && <Loader />}
      {!state.isVehiclesLoad && (
        <Card title="Vehicles" extraClass="largeCard">
          {state.vehicles.map((vehicule, index) => (
            <ListItem key={index}>
              <Link className="item-link" to={`/vehicle/${index + 1}`}>
                {vehicule.name}
              </Link>
            </ListItem>
          ))}
        </Card>
      )}
      {state.isVehiclesLoadError && <GlobalError />}
    </>
  );
};
