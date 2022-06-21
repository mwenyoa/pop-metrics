const URL = 'https://countriesnow.space/api/v0.1/countries/population';

export const GET_POPULATION_DATA = 'pop-metrics/redux/GET_POPULATION_DATA';
export const FETCH_STATE = 'pop-metrics/redux/FETCH_STATE';

// initial state
const initialState = [];

// Action creators
export const loadInitialState = (payload) => ({
  type: FETCH_STATE,
  payload,
});

const loadPopulation = (payload) => ({
  type: GET_POPULATION_DATA,
  payload,
});


