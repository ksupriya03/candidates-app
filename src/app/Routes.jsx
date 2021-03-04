import { Route, Switch } from 'react-router-dom';

import { ROUTES } from './util/constants';
import CandidatesData from './containers/Dashboard';
// import CandidateDetails from './containers/CandidateDetails/CandidateDetails'
import CandidateDetailsFormik from './containers/CandidateDetails/CandidateDetailsFormik';

const Routes = () => (
  <main>
    <Switch>
      <Route path={ROUTES.candidateList} exact component={CandidatesData} />
      <Route path={ROUTES.candidateDetails} exact component={CandidateDetailsFormik} />
    </Switch>
  </main>
);

export default Routes;
