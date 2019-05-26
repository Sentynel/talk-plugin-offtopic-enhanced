import { ONTOPIC_TOGGLE_CHECKBOX, OFFTOPIC_TOGGLE_CHECKBOX } from './constants';

const initialState = {
  checked: false,
  checkedOnTopic: false,
};

export default function offTopic(state = initialState, action) {
  switch (action.type) {
    case OFFTOPIC_TOGGLE_CHECKBOX: {
      return {
        ...state,
        checked: !state.checked,
      };
    }
    case ONTOPIC_TOGGLE_CHECKBOX: {
      return {
        ...state,
        checkedOnTopic: !state.checkedOnTopic,
      };
    }
    default:
      return state;
  }
}
