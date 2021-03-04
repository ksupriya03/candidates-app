import { useSelector } from 'react-redux';

import { selectCandidates } from '../../selectors';

import './styles.scss';

const CandidatesData = () => {
  const candidateList = useSelector(selectCandidates);

  console.log('candidate list values ', candidateList);
  return (
    <div className="dashboard">
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
            candidateList.map((candidate, idx) => (
              <tr key={candidate.id} className="table-header-row">
                <td className="table-heading-space">{idx + 1}</td>
                <td className="table-heading-space">
                  <a href={`#/details/${candidate.id}`} data-testid={candidate.name}>
                    {candidate.name}
                  </a>
                </td>
                <td className="table-heading-space">{candidate.email}</td>
                <td className="table-heading-space">{candidate.jobId}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidatesData;
