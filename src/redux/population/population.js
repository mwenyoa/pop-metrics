const URL = 'https://countriesnow.space/api/v0.1/countries/population';

export const GET_POPULATION_DATA = 'GET_POPULATION_DATA';
export const FETCH_STATE = 'FETCH_STATE';

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

export const fetchPopulation = () => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const population = await response.json();

    dispatch(
      loadPopulation(population.data.map((people) => {
        const {
          code, country, iso3, populationCounts,
        } = people;

        return {
          code, country, iso3, populationCounts,
        };
      })),
    );
  } catch (err) {
    throw new Error(err);
  }
};

const populationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULATION_DATA:
      return { ...state, population: action.payload };
    case FETCH_STATE:
      return [...state];
    default:
      return state;
  }
};

export default populationReducer;
