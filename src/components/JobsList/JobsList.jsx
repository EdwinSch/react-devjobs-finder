import jobsData from "../../../api/data.json";

import Card from "../Card/Card";

const JobsList = () => {
  return (
    <section className="jobs-list-container">
      {jobsData.map((job) => {
        return <Card key={job.id} {...job} />;
      })}
    </section>
  );
};

export default JobsList;
