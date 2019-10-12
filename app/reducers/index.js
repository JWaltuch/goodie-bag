import { combineReducers } from 'redux';

//action types
const GET_CANDY = 'GET_CANDY';
const GET_SINGLE_CANDY = 'GET_SINGLE_CANDY';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

//action creators
const getCandy = candies => ({
  type: GET_CANDY,
  candies,
});
const getSingleCandy = candy => ({
  type: GET_SINGLE_CANDY,
  candy,
});
const increaseQuantity = candy => ({
  type: INCREASE_QUANTITY,
  candy,
});
const decreaseQuantity = candy => ({
  type: DECREASE_QUANTITY,
  candy,
});

//thunk creators
export const getCandyFromDatabase = () => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSingleCandyFromDatabase = (id, type) => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      if (type === GET_SINGLE_CANDY) {
        dispatch(getSingleCandy(data));
      } else if (type === INCREASE_QUANTITY) {
        dispatch(increaseQuantity(data));
      } else if (type === DECREASE_QUANTITY) {
        dispatch(decreaseQuantity(data));
      }
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
