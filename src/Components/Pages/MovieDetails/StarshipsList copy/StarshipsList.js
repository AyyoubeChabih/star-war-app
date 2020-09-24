import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../Core/Card';
import { GlobalError } from '../../../Core/GlobalError';
import { Loader } from '../../../Loader';
import { ListItem } from '../../../Core/ListItem';
import { Context } from '../../../../actions/Provider';
import { actions } from '../../../../helpers/enums';
import './starshipsList.css';

export const StarshipsList = ({ starshipsUrls }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: actions.FETCH_STARSHIPS_REQUEST,
      payload: { urls: starshipsUrls, dispatcher: dispatch },
    });
  }, [starshipsUrls, dispatch]);

  return (
    <>
      {!state.isStarshipsLoadError && state.isStarshipsLoad && <Loader />}
      {!state.isStarshipsLoad && (
        <Card title="Starships" extraClass="largeCard">
          {state.starships.map((starship, index) => (
            <ListItem key={index}>
              <Link className="item-link" to={`/starship/${index + 1}`}>
                {starship.name}
              </Link>
            </ListItem>
          ))}
        </Card>
      )}
      {state.isStarshipsLoadError && <GlobalError />}
    </>
  );
};
