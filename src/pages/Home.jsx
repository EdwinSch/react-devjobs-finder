import { useEffect, useState } from "react";
import jobsData from "../../api/data.json";

import JobsList from "../components/JobsList/JobsList";

const Home = () => {
  // ON LOAD Set state
  const [jobs, setJobs] = useState([]);
  const [showLoadBtn, setShowLoadBtn] = useState(true);

  // Filter array for partial rendering
  const initialDataLoad = () => {
    const filterIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const filteredJobs = jobsData.filter((job) =>
      filterIndexes.includes(job.id)
    );
    setJobs(filteredJobs);
  };

  // Invoke initial load
  useEffect(() => {
    initialDataLoad();
  }, []);

  // Show/Hide load BTN
  const showMore = () => {
    setJobs(jobsData);
    setShowLoadBtn(false);
  };

  return (
    <div className="homepage">
      <JobsList jobs={jobs} />
      {/* Load all jobs */}
      {showLoadBtn && (
        <button onClick={showMore} className="btn load-btn" type="button">
          load more
        </button>
      )}
    </div>
  );
};

export default Home;
