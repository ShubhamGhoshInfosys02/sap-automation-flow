import { DRAGPANELON,DRAGPANELOFF } from '../action/actionTypes';

const initialState = false;

const dragPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAGPANELON:
      return true;
    case DRAGPANELOFF:
      return false;
    default:
      return state;
  }
};

export default dragPanelReducer;