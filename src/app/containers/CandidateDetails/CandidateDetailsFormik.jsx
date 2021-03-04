import { Formik, Field, Form } from 'formik';
import { STATES } from '../../Util/constants';
import { formatAmount } from '../../Util/formatter';
import './candidate-details-page.scss';

const CandidateDetailsFormik = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        email: '',
        availableDt: '',
        state: '',
        desiredSalary: '',
        currentSalary: '',
        isEmployed: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validate={(values) => {
        const errors = {};

        if (!values.firstName) {
          errors.firstName = 'Candidate Name is required';
        }
        if (!values.availableDt) {
          errors.availableDt = 'Date is required';
        }
        if (!values.state) {
          errors.state = 'State field is required';
        }
        if (!values.isEmployed) {
          errors.isEmployed = 'Choose Employment Status';
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
          <Form {...props} className="customer-layout">
            <div>
              <label htmlFor="jobid">Job Id</label>
              <div>
                <Field id="jobID" name="jobid" disabled className="form-control" />
                {props.errors.jobId && (
                  <div id="feedback-jobId" class="invalid-feedback">
                    {props.errors.jobId}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="firstName">Candidate Name</label>
              <div>
                <Field id="firstName" name="firstName" placeholder="Jane" required className="form-control" />
                {props.errors.firstName && (
                  <div id="feedback-firstName" class="invalid-feedback">
                    {props.errors.firstName}
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
              <label htmlFor="email">Available after date</label>
              <div>
                <Field id="availableDt" name="availableDt" placeholder="10-03-2020" type="date" required className="form-control" />
                {props.errors.availableDt && (
                  <div id="feedback-availableDt" class="invalid-feedback">
                    {props.errors.availableDt}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email">State</label>
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
                  <Field type="radio" name="isEmployed" value="Yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="isEmployed" value="No" />
                  No
                </label>
                {props.errors.isEmployed && (
                  <div id="feedback-isEmployed" class="invalid-feedback">
                    {props.errors.isEmployed}
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
            {props.values.isEmployed === 'Yes' ? (
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
              <button type="submit" disabled={!props.isValid} className="btn-submit">
                Submit
              </button>
              {props.dirty && props.isValid && <div className="ready-to-save">Ready to save</div>}
            </div>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);

export default CandidateDetailsFormik;
