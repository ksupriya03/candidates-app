import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { ROUTES, STATES } from '../../util/constants';
import { formatAmount } from '../../util/formatter';
import { getCandidateById } from '../../selectors';
import { updateCandidateData } from '../../actions/candidate';

import './styles.scss';

const CandidateDetailsFormik = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const candidateDetails = useSelector((state) => getCandidateById(state, id));

  const gotoHome = () => {
    history.push(ROUTES.candidateList);
  };

  const updateData = (values) => {
    dispatch(updateCandidateData({ ...candidateDetails, ...values }));
    gotoHome();
  };

  return (
    <div>
      <Formik
        initialValues={{
          jobId: candidateDetails.jobId,
          name: candidateDetails.name,
          email: candidateDetails.email,
          availableDate: candidateDetails.availableDate,
          state: candidateDetails.state,
          currentlyEmployed: candidateDetails.currentlyEmployed,
          desiredSalary: candidateDetails.desiredSalary,
          currentSalary: candidateDetails.currentSalary,
        }}
        onSubmit={updateData}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Name is required';
          }
          if (!values.availableDate) {
            errors.availableDate = 'Date is required';
          }
          if (!values.state) {
            errors.state = 'State field is required';
          }
          if (!values.currentlyEmployed) {
            errors.currentlyEmployed = 'Choose Employment Status';
          }

          if (!values.email) {
            errors.email = 'Email is required.';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          return errors;
        }}
      >
        {(props) => (
          <div className="details-formik">
            <div className="page-header">
              <h1 className="personal-details-header">Candidate details</h1>
              <div className="personal-details-description">The details of candidate</div>
            </div>
            <Form className="customer-layout" noValidate>
              <div>
                <label htmlFor="jobId">Job Id</label>
                <div>
                  <Field id="jobId" name="jobId" disabled className="form-control" />
                  {props.errors.jobId && (
                    <div id="feedback-jobId" class="invalid-feedback">
                      {props.errors.jobId}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="name">Candidate Name</label>
                <div>
                  <Field id="name" name="name" placeholder="Jane" required className="form-control" />
                  {props.errors.name && (
                    <div id="feedback-name" class="invalid-feedback">
                      {props.errors.name}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <div>
                  <Field id="email" name="email" placeholder="Doe@mail.com" type="email" required className="form-control" />
                  {props.errors.email && (
                    <div id="feedback-email" class="invalid-feedback">
                      {props.errors.email}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="availableDate">Available after date</label>
                <div>
                  <Field id="availableDate" name="availableDate" placeholder="10-03-2020" type="date" required className="form-control" />
                  {props.errors.availableDate && (
                    <div id="feedback-availableDate" class="invalid-feedback">
                      {props.errors.availableDate}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="state">State</label>
                <div>
                  <Field as="select" name="state" required className="form-control">
                    <option value="">Choose...</option>
                    {STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </Field>
                  {props.errors.state && (
                    <div id="feedback-state" class="invalid-feedback">
                      {props.errors.state}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div id="my-radio-group">Currently Employed</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="currentlyEmployed" value="Y" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="currentlyEmployed" value="N" />
                    No
                  </label>
                  {props.errors.currentlyEmployed && (
                    <div id="feedback-currentlyEmployed" class="invalid-feedback">
                      {props.errors.currentlyEmployed}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="desiredSalary">Desired salary</label>
                <div>
                  <Field id="desiredSalary" name="desiredSalary" value={formatAmount(props.values.desiredSalary)} className="form-control" />
                </div>
              </div>
              {props.values.currentlyEmployed === 'Y' ? (
                <div>
                  <label htmlFor="currentSalary">Current salary</label>
                  <div>
                    <Field id="currentSalary" name="currentSalary" value={formatAmount(props.values.currentSalary)} className="form-control" />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              <div>
                <button type="submit" disabled={!props.isValid || !props.dirty} className="btn btn-submit">
                  Submit
                </button>
                {props.dirty && props.isValid && <div className="ready-to-save">Ready to save</div>}
              </div>
              <div>
                <button type="button" className="btn" onClick={gotoHome}>
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CandidateDetailsFormik;
