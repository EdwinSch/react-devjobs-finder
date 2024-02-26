import { Link } from "react-router-dom";

const Card = ({ id, company, position, postedAt, contract, location }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        {postedAt} - {contract}
      </div>
      <h3>{position}</h3>

      {/* TEMP */}
      <Link to={`/job/${id}`}>SHOW JOB</Link>
    </div>
  );
};

export default Card;
