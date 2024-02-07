// import jobs from "../api/data.json";

import { useState, useEffect } from "react";

const url = "../api/data.json";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch from API
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  console.log(jobs);

  // Invoke Fetch
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {jobs.map((job) => {
        return <p key={job.id}>{job.company}</p>;
      })}
    </div>
  );
}

export default App;
