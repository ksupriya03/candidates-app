import { POPULATE_CANDIDATES } from '../Actions/candidate';
const initialCandidateList = [
  { Id: 1, Name: 'John', email: 'John@gmail.com', availableDate: '05/03/2021', state: 'VIC', currentlyEmployed: 'Yes', derisedSalary: '90000', currentSalary: '70000', jobId: 'flybuys2231' },
  { Id: 2, Name: 'mary', email: 'mary@mail.com', availableDate: '10/03/2021', state: 'VIC', currentlyEmployed: 'Yes', derisedSalary: '90000', currentSalary: '70000', jobId: 'flybuys222' },
];

// this is the ES2015 syntax for setting a default value for state in the function parameters
const populateList = (state, action) => ({
  ...state,
  candidateList: state,
});

const candidateData = (state = initialCandidateList, action) => {
  switch (action.type) {
    case POPULATE_CANDIDATES:
      return populateList(state, action);
    default:
      return state;
  }
};

export default candidateData;
