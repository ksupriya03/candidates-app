import { Route, Switch } from 'react-router-dom';

import CandidatesData from './containers/Dashboard';
import CandidateDetails from './containers/CandidateDetails';

import { ROUTES } from './util/constants';

const Routes = () => (
  <main>
    <Switch>
      <Route path={ROUTES.candidateList} exact component={CandidatesData} />
      <Route path={ROUTES.candidateDetails} exact component={CandidateDetails} />
    </Switch>
  </main>
);

export default Routes;
