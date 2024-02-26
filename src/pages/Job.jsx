import { useParams, Link } from "react-router-dom";
import jobsData from "../../api/data.json";

const Job = () => {
  const { jobId } = useParams();
  const selectedJob = jobsData.find((job) => job.id == jobId);
  // destructure
  const { position } = selectedJob;

  return (
    <div>
      <p>SINGLE JOB PAGE</p>
      <p>job: {position}</p>
      <Link to={"/"}>back to homepage</Link>
    </div>
  );
};
export default Job;
