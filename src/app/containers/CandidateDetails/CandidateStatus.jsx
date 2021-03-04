/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../Util/constants';
import { connect } from 'react-redux';
import { populateCandidateList } from '../../Actions/candidate';
import './candidate.scss';

const CandidateStatus = ({ candidateList, populateCandidateList }) => {
  console.log('candidate list', candidateList);

  useEffect(() => {
    populateCandidateList();
  }, []);

  const history = useHistory();
  const candidateSelect = () => {
    history.push(ROUTES.candidateDetails);
    return;
  };
  console.log('candidate list values ', candidateList);
  return (
    <div className="bd-example">
      <table className="table table-hover">
        <caption className="caption">List of candidates</caption>
        <thead className="table-header">
          <tr className="table-header table-heading">
            <th scope="col" className="table-heading-space">
              #
            </th>
            <th scope="col" className="table-heading-space">
              Candidate Name
            </th>
            <th scope="col" className="table-heading-space">
              Email Id
            </th>
            <th scope="col" className="table-heading-space">
              JobID
            </th>
          </tr>
        </thead>
        <tbody className="table-header">
          {candidateList &&
            candidateList.map((candidate) => (
              <tr key={candidate.Id} className="table-header-row" onClick={candidateSelect}>
                <th scope="row" className="table-heading-space">
                  {candidate.Id}
                </th>
                <td className="table-heading-space">{candidate.Name}</td>
                <td className="table-heading-space">{candidate.email}</td>
                <td className="table-heading-space">{candidate.jobId}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { candidateList: state.candidate.candidateList };
};

const mapDispatchToProps = (dispatch) => ({
  populateCandidateList: () => dispatch(populateCandidateList()),
});
const CandidateList = connect(mapStateToProps, mapDispatchToProps)(CandidateStatus);
export default CandidateList;
