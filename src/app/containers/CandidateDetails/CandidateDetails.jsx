import React, { useState } from 'react';
import { STATES } from '../../util/constants';

const CandidateDetails = () => {
  const [state, setState] = useState({
    firstName: '',
    email: '',
    availableDt: '',
    state: '',
    desiredSalary: '',
    currentSalary: '',
    isEmployed: 'No',
  });
  const handleFieldChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const submitCandidateInfo = (event) => {
    event.preventDefault();
    const submittedValues = {
      firstName: state.firstName,
      email: state.email,
      availableDt: state.availableDt,
      state: state.state,
      DesiredSalary: state.desiredSalary,
      currentSalary: state.currentSalary,
      'currently employed': state.isEmployed,
    };
    alert(JSON.stringify(submittedValues));
  };

  console.log('value in firstname', state.firstName, state.email);

  return (
    <div className="details-formik">
      <div className="page-header">
        <h1 className="personal-details-header">Candidate details</h1>
        <div className="personal-details-description">The details of candidate</div>
      </div>
      <form className="customer-layout" onSubmit={submitCandidateInfo}>
        <div>
          <label htmlFor="inputJObid">JobID</label>
          <div>
            <input type="text" disabled className="form-control" id="inputJobId" placeholder="870" />
          </div>
        </div>

        <div>
          <label htmlFor="inputEmail4">Name</label>
          <div>
            <input type="text" name="firstName" required className="form-control" onChange={handleFieldChange} value={state.firstName} placeholder="John ken" />
          </div>
        </div>
        <div>
          <label htmlFor="inputPassword4">Email</label>
          <div>
            <input type="email" name="email" className="form-control" onChange={handleFieldChange} value={state.email} required placeholder="test@mail.com" />
          </div>
        </div>

        <div className="available-date ">
          <label htmlFor="inputdate">Available After Date</label>
          <input type="date" name="availableDt" className="form-control" onChange={handleFieldChange} value={state.availableDt} required placeholder="10/10/2001" />
        </div>
        <div className="state">
          <label htmlFor="inputState">State</label>
          <select name="state" onChange={handleFieldChange} value={state.state} required className="form-control">
            <option value="">Choose...</option>
            {STATES.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="currently-employed">
          <div className="row">
            <legend className="">Currently Employed</legend>
            <div className="">
              <div className="form-check">
                <input className="form-check-input" type="radio" onChange={handleFieldChange} name="isEmployed" value="Yes" checked={state.isEmployed === 'Yes'} />
                <label className="form-check-label" htmlFor="gridRadios1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" onChange={handleFieldChange} name="isEmployed" value="No" checked={state.isEmployed === 'No'} />
                <label className="form-check-label" htmlFor="gridRadios2">
                  No
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className="group-row ">
          <label htmlFor="inputEmail4">Desired Salary</label>
          <input type="text" name="desiredSalary" onChange={handleFieldChange} value={state.desiredSalary} className="form-control" placeholder="$50,000" />
        </div>
        {state.isEmployed === 'Yes' ? (
          <div className="group-row ">
            <label htmlFor="inputcurrentSalary">Current Salary</label>
            <input type="text" name="currentSalary" onChange={handleFieldChange} value={state.currentSalary} className="form-control" placeholder="$10,000" />
          </div>
        ) : (
          <div></div>
        )}

        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidateDetails;
