import JobsList from "../components/JobsList/JobsList";

import jobsData from "../../api/data.json";

export const loader = async () => {
  const response = jobsData;
  console.log(response);
  return { response };
};

const Home = () => {
  return (
    <div className="homepage">
      <JobsList />
    </div>
  );
};

export default Home;
