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

export const getSingleCandyFromDatabase = id => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      dispatch(getSingleCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeQuantity = (type, id) => {
  return async (dispatch, getState, { axios }) => {
    try {
      const { data } = await axios.put(`/api/candies/${id}/${type}`);
      if (type === 'increase') {
        dispatch(increaseQuantity(data));
      } else {
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
    case INCREASE_QUANTITY:
      return { ...state, selectedCandy: action.candy };
    case DECREASE_QUANTITY:
      return { ...state, selectedCandy: action.candy };
    default:
      return state;
  }
};

const reducer = combineReducers({ rootReducer, candyReducer });

export default reducer;
