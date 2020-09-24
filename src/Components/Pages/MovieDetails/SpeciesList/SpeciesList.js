import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, GlobalError, Loader, ListItem } from '../../../Core';
import { Context } from '../../../../actions/Provider';
import { actions } from '../../../../helpers/enums';
import './speciesList.css';

export const SpeciesList = ({ speciesUrls }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: actions.FETCH_SPECIES_REQUEST,
      payload: { urls: speciesUrls, dispatcher: dispatch },
    });
  }, [speciesUrls, dispatch]);

  return (
    <>
      {!state.isSpeciesLoadError && state.isSpeciesLoad && <Loader />}
      {!state.isSpeciesLoad && (
        <Card title="Species" extraClass="largeCard">
          {state.species.map((specie, index) => (
            <ListItem key={index}>
              <Link className="item-link" to={`/specie/${index + 1}`}>
                {specie.name}
              </Link>
            </ListItem>
          ))}
        </Card>
      )}
      {state.isSpeciesLoadError && <GlobalError />}
    </>
  );
};
