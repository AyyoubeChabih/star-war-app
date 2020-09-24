import { actions } from '../helpers/enums';

const fetchData = async (urls, dispatch, fetchActions) => {
  const promises = urls.map((url) => fetch(url));
  const responses = await Promise.all(promises);
  const data = [];
  let isError = false;
  responses.forEach((response) => {
    if (response.ok) {
      const element = response.json();
      data.push(element);
    } else {
      isError = true;
    }
  });

  const elements = await Promise.all(data);
  if (isError) {
    dispatch({
      type: fetchActions.FAIL,
    });
  } else {
    dispatch({
      type: fetchActions.SUCCESS,
      payload: elements,
    });
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.results,
        isError: false,
        isLoading: false,
      };
    case actions.FETCH_MOVIES_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case actions.FETCH_PEOPLE_REQUEST:
      fetchData(action.payload.urls, action.payload.dispatcher, {
        FAIL: actions.FETCH_PEOPLE_FAIL,
        SUCCESS: actions.FETCH_PEOPLE_SUCCESS,
      });
      return {
        ...state,
        isPeopleLoad: true,
        isPeopleLoadError: false,
      };
    case actions.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        isPeopleLoad: false,
        isPeopleLoadError: false,
        people: action.payload,
      };
    case actions.FETCH_PEOPLE_FAIL:
      return {
        ...state,
        isPeopleLoad: false,
        isPeopleLoadError: true,
      };
    case actions.FETCH_PLANETS_REQUEST:
      fetchData(action.payload.urls, action.payload.dispatcher, {
        FAIL: actions.FETCH_PLANETS_FAIL,
        SUCCESS: actions.FETCH_PLANETS_SUCCESS,
      });
      return {
        ...state,
        isPlanetsLoad: true,
        isPlanetsLoadError: false,
      };
    case actions.FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isPlanetsLoad: false,
        isPlanetsLoadError: false,
        planets: action.payload,
      };
    case actions.FETCH_PLANETS_FAIL:
      return {
        ...state,
        isPlanetsLoad: false,
        isPlanetsLoadError: true,
      };
    case actions.FETCH_SPECIES_REQUEST:
      fetchData(action.payload.urls, action.payload.dispatcher, {
        FAIL: actions.FETCH_SPECIES_FAIL,
        SUCCESS: actions.FETCH_SPECIES_SUCCESS,
      });
      return {
        ...state,
        isSpeciesLoad: true,
        isSpeciesLoadError: false,
      };
    case actions.FETCH_SPECIES_SUCCESS:
      return {
        ...state,
        isSpeciesLoad: false,
        isSpeciesLoadError: false,
        species: action.payload,
      };
    case actions.FETCH_SPECIES_FAIL:
      return {
        ...state,
        isSpeciesLoad: false,
        isSpeciesLoadError: true,
      };
    case actions.FETCH_STARSHIPS_REQUEST:
      fetchData(action.payload.urls, action.payload.dispatcher, {
        FAIL: actions.FETCH_STARSHIPS_FAIL,
        SUCCESS: actions.FETCH_STARSHIPS_SUCCESS,
      });
      return {
        ...state,
        isStarshipsLoad: true,
        isStarshipsLoadError: false,
      };
    case actions.FETCH_STARSHIPS_SUCCESS:
      return {
        ...state,
        isStarshipsLoad: false,
        isStarshipsLoadError: false,
        starships: action.payload,
      };
    case actions.FETCH_STARSHIPS_FAIL:
      return {
        ...state,
        isStarshipsLoad: false,
        isStarshipsLoadError: true,
      };
    case actions.FETCH_VEHICLES_REQUEST:
      fetchData(action.payload.urls, action.payload.dispatcher, {
        FAIL: actions.FETCH_VEHICLES_FAIL,
        SUCCESS: actions.FETCH_VEHICLES_SUCCESS,
      });
      return {
        ...state,
        isVehiclesLoad: true,
        isVehiclesLoadError: false,
      };
    case actions.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        isVehiclesLoad: false,
        isVehiclesLoadError: false,
        vehicles: action.payload,
      };
    case actions.FETCH_VEHICLES_FAIL:
      return {
        ...state,
        isVehiclesLoad: false,
        isVehiclesLoadError: true,
      };
    default:
      return state;
  }
};
