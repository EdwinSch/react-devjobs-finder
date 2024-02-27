import { useParams, Link } from "react-router-dom";
import jobsData from "../../api/data.json";

import JobInfo from "../components/JobInfo/JobInfo";
import JobFooter from "../components/JobFooter/JobFooter";

const Job = () => {
  const { jobId } = useParams();
  const selectedJob = jobsData.find((job) => job.id == jobId);

  return (
    <div className="job-page-container">
      <JobInfo selectedJob={selectedJob} />
      <JobFooter selectedJob={selectedJob} />
    </div>
  );
};
export default Job;
