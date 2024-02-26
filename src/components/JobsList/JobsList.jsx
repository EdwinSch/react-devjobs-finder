import Card from "../Card/Card";
import jobsData from "../../../api/data.json";

const JobsList = () => {
  return (
    <section className="jobs-list-container">
      {jobsData.map((item) => {
        return <Card key={item.id} {...item} />;
      })}
    </section>
  );
};

export default JobsList;
