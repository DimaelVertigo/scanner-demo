import {SET_TITLE} from '../constants/Page';

export const setTitle = title => {
  return {
    type: SET_TITLE,
    payload: title
  }
}