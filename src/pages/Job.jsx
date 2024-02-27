import { useParams, Link } from "react-router-dom";
import jobsData from "../../api/data.json";

import JobInfo from "../components/JobInfo/JobInfo";

const Job = () => {
  const { jobId } = useParams();
  const selectedJob = jobsData.find((job) => job.id == jobId);

  return (
    <div className="job-page-container">
      <JobInfo selectedJob={selectedJob} />
    </div>
  );
};
export default Job;
