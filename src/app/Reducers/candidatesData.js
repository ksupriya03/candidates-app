/* eslint-disable no-case-declarations */
import { UPDATE_CANDIDATE_DATA, ADD_CANDIDATE_DATA } from '../actions/candidate';
import { getData, persistData } from '../util/dummyData';
import { generateRandomId } from '../util/utils';

const candidatesData = (state = getData(), action) => {
  const updatedState = [...state];

  switch (action.type) {
    case UPDATE_CANDIDATE_DATA:
      const dataIdx = state.findIndex((data) => data.id === action.payload.id);
      updatedState.splice(dataIdx, 1, action.payload);
      break;
    case ADD_CANDIDATE_DATA:
      updatedState.push({ ...action.payload, id: generateRandomId() });
      break;
    default:
      break;
  }

  persistData(updatedState);
  return updatedState;
};

export default candidatesData;
