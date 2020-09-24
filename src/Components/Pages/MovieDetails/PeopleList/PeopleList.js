import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, GlobalError, Loader, ListItem } from '../../../Core';
import { Context } from '../../../../actions/Provider';
import { actions } from '../../../../helpers/enums';
import './peopleList.css';

export const PeopleList = ({ charactersUrls }) => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    dispatch({
      type: actions.FETCH_PEOPLE_REQUEST,
      payload: { urls: charactersUrls, dispatcher: dispatch },
    });
  }, [charactersUrls, dispatch]);

  return (
    <>
      {!state.isPeopleLoadError && state.isPeopleLoad && <Loader />}
      {!state.isPeopleLoad && (
        <Card title="People" extraClass="largeCard">
          {state.people.map((person, index) => (
            <ListItem key={index}>
              <Link className="item-link" to={`/people/${index + 1}`}>
                {person.name}
              </Link>
            </ListItem>
          ))}
        </Card>
      )}
      {state.isPeopleLoadError && <GlobalError />}
    </>
  );
};
