import { combineReducers } from 'redux';

//action type
const GET_CANDY = 'GET_CANDY';
const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';

//action creator
const getCandy = candies => ({
  type: GET_CANDY,
  candies,
});
const getSingleCandy = candy => ({
  type: GET_SINGLE_CANDY,
  candy,
});

//thunk creator
export const getCandyFromDatabase = () => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.get('./api/candies');
      dispatch(getCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleCandyFromDatabase = id => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.get(`./api/candies/${id}`);
      dispatch(getSingleCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = { candies: [], selectedCandy: {} };

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDY:
      return { ...state, candies: action.candies };
    case GET_SINGLE_CANDY:
      return { ...state, selectedCandy: action.candy };
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({ rootReducer, candyReducer });

export default reducer;
