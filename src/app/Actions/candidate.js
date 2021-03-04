export const UPDATE_CANDIDATE_DATA = 'UPDATE_CANDIDATE_DATA';
export const ADD_CANDIDATE_DATA = 'ADD_CANDIDATE_DATA';

export function updateCandidateData(payload) {
  return { type: 'UPDATE_CANDIDATE_DATA', payload };
}

export function addCandidateData(payload) {
  return { type: 'ADD_CANDIDATE_DATA', payload };
}
