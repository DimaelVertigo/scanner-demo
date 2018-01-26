import {SET_TITLE} from '../constants/Page';

const initialState = {
  name: 'Dima',
  surname: 'Klim',
  age: 31
};

export default function userstate(state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload }

    default:
      return state;
  }
}
