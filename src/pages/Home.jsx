import { useState } from "react";
import jobsData from "../../api/data.json";

import JobsList from "../components/JobsList/JobsList";

const Home = () => {
  const [jobs, setJobs] = useState(jobsData);

  return (
    <div className="homepage">
      <JobsList jobs={jobs} />
    </div>
  );
};

export default Home;
