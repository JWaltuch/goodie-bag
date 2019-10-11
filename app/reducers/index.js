import { combineReducers } from 'redux';

//action type
const GET_CANDY = 'GET_CANDY';
const ADD_CANDY = 'ADD_CANDY';

//thunk type
export const getCandyFromDatabase = () => {
  return async (dispatch, axios) => {
    console.log(axios);
    try {
      const { data } = await axios.get('./candies');
      dispatch(getCandy(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//action creator
const addCandy = candy => {
  type: ADD_CANDY, candy;
};
const getCandy = candies => {
  type: GET_CANDY, candies;
};

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDY:
      return { ...state, candies: action.candies };
    case ADD_CANDY:
      //functionality to add a candy
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({ rootReducer, candyReducer });

export default reducer;
