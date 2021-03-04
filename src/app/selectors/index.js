import { createSelector } from 'reselect';

export const selectCandidates = (state) => state.candidates;

export const getCandidateById = createSelector(
  selectCandidates,
  (_, id) => id,
  // eslint-disable-next-line eqeqeq
  (candidatesData, id) => candidatesData.find((data) => data.id == id),
);
