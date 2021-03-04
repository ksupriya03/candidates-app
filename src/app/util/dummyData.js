import { generateRandomId } from './utils';

export const getDummyData = () => [
  {
    id: generateRandomId(),
    name: 'John',
    email: 'John@gmail.com',
    availableDate: '2021-03-05',
    state: 'VIC',
    currentlyEmployed: 'Y',
    desiredSalary: '90000',
    currentSalary: '70000',
    jobId: 'flybuys2231',
  },
  {
    id: generateRandomId(),
    name: 'mary',
    email: 'mary@mail.com',
    availableDate: '2021-10-03',
    state: 'VIC',
    currentlyEmployed: 'Y',
    desiredSalary: '90000',
    currentSalary: '70000',
    jobId: 'flybuys222',
  },
  {
    id: generateRandomId(),
    name: 'Jane',
    email: 'jane@mail.com',
    availableDate: '2021-04-14',
    state: 'NSW',
    currentlyEmployed: 'Y',
    desiredSalary: '90000',
    currentSalary: '70000',
    jobId: 'flybuys123',
  },
  {
    id: generateRandomId(),
    name: 'Dave',
    email: 'dave@mail.com',
    availableDate: '2021-10-03',
    state: 'VIC',
    currentlyEmployed: 'N',
    desiredSalary: '90000',
    currentSalary: '70000',
    jobId: 'flybuys222',
  },
];

const SESSION_DATA_KEY = 'DUMMY_SESSION_DATA';
export const getData = () => (window.sessionStorage.getItem(SESSION_DATA_KEY) && JSON.parse(window.sessionStorage.getItem(SESSION_DATA_KEY))) || getDummyData();
export const persistData = (data) => window.sessionStorage.setItem(SESSION_DATA_KEY, JSON.stringify(data));
