import { ONTOPIC_TOGGLE_CHECKBOX, OFFTOPIC_TOGGLE_CHECKBOX } from './constants';

export const toggleCheckbox = () => ({
  type: OFFTOPIC_TOGGLE_CHECKBOX,
});
export const toggleCheckboxOnTopic = () => ({
  type: ONTOPIC_TOGGLE_CHECKBOX,
});
