import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, GlobalError, Loader, ListItem } from '../../../Core';
import { Context } from '../../../../actions/Provider';
import { actions } from '../../../../helpers/enums';
import './planetsList.css';

export const PlanetsList = ({ planetsUrls }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: actions.FETCH_PLANETS_REQUEST,
      payload: { urls: planetsUrls, dispatcher: dispatch },
    });
  }, [planetsUrls, dispatch]);

  return (
    <>
      {!state.isPlanetsLoadError && state.isPlanetsLoad && <Loader />}
      {!state.isPlanetsLoad && (
        <Card title="Planets" extraClass="largeCard">
          {state.planets.map((planet, index) => (
            <ListItem key={index}>
              <Link className="item-link" to={`/planet/${index + 1}`}>
                {planet.name}
              </Link>
            </ListItem>
          ))}
        </Card>
      )}
      {state.isPlanetsLoadError && <GlobalError />}
    </>
  );
};
