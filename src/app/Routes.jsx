import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './Util/constants';
import CandidateStatus from './containers/CandidateDetails/CandidateStatus';
// import CandidateDetails from './containers/CandidateDetails/CandidateDetails'
import CandidateDetailsFormik from './containers/CandidateDetails/CandidateDetailsFormik';

const Routes = () => (
  <>
    <Switch>
      <Route path={ROUTES.candidateList} exact component={CandidateStatus} />
      <Route path={ROUTES.candidateDetails} exact component={CandidateDetailsFormik} />
    </Switch>
  </>
);

export default Routes;
