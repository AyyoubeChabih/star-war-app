import React, { useReducer, useEffect, createContext } from 'react';
import { reducer } from './Reducer';
import { actions } from '../helpers/enums';

const initialState = {
  isError: false,
  isLoading: true,
  isPeopleLoad: false,
  isPeopleLoadError: true,
  isPlanetsLoad: false,
  isPlanetsLoadError: true,
  isSpeciesLoad: false,
  isSpeciesLoadError: true,
  isStarshipsLoad: false,
  isStarshipsLoadError: true,
  isVehiclesLoad: false,
  isVehiclesLoadError: true,
  movies: null,
  people: [],
  planets: [],
  species: [],
  starships: [],
  vehicles: [],
};

export const Context = createContext();

export const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function fetchData() {
    try {
      const resCall = await fetch('https://swapi.dev/api/films/');
      const resJson = await resCall.json();
      dispatch({
        type: actions.FETCH_MOVIES_SUCCESS,
        payload: resJson,
      });
    } catch (err) {
      dispatch({
        type: actions.FETCH_MOVIES_FAIL,
      });
    }
  }
  useEffect(() => {
    dispatch({
      type: actions.FETCH_MOVIES_REQUEST,
    });
    fetchData();
  }, []);
  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
