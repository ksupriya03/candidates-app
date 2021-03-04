export const POPULATE_CANDIDATES = 'POPULATE_CANDIDATES';

export function populateCandidateList(payload) {
  return { type: 'POPULATE_CANDIDATES', payload };
}
