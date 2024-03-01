import { IoSearch, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

import jobsData from "../../../api/data.json";

const Filters = () => {
  // Text/terms Input States
  const [searchTerms, setSearchTerms] = useState({
    multiple: "",
    location: "",
    fulltime: false,
  });

  const handleChange = (event) => {
    setSearchTerms({
      ...searchTerms,
      // [event.target.name]: event.target.value,
      [event.target.name]: event.target.value.toLowerCase(),
      fulltime: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filterData = jobsData.filter((job) => {
      return (
        (searchTerms.multiple === "" ||
          job.company.toLowerCase().includes(searchTerms.multiple) ||
          job.position.toLowerCase().includes(searchTerms.multiple)) &&
        (searchTerms.location === "" ||
          job.location.toLowerCase().includes(searchTerms.location))
      );
    });
    // Log
    console.log(filterData);

    // Clear Inputs
    // setSearchTerms({
    //   multiple: "",
    //   location: "",
    //   fulltime: false,
    // });
  };

  return (
    <div className="form-float-container">
      <form onSubmit={handleSubmit}>
        {/* Multi text filter */}
        <div className="filter-wrapper">
          <label htmlFor="multiple" className="txt-input-label">
            <IoSearch />
          </label>
          <input
            type="text"
            value={searchTerms.multiple}
            onChange={handleChange}
            name="multiple"
            id="multiple"
            placeholder="Filter by jobtitle or company…"
          />
        </div>

        {/* Location text filter */}
        <div className="filter-wrapper">
          <label htmlFor="location" className="txt-input-label">
            <IoLocationSharp />
          </label>
          <input
            type="text"
            value={searchTerms.location}
            onChange={handleChange}
            name="location"
            id="location"
            placeholder="Filter by country..."
          />
        </div>

        {/* Checkbox && Submit  */}
        <div className="filter-wrapper submit-wrapper">
          <input
            type="checkbox"
            checked={searchTerms.fulltime}
            onChange={handleChange}
            name="fulltime"
            id="fulltime"
          />
          <label htmlFor="fulltime" className="checkbox-label">
            Full Time Only
          </label>

          <button className="btn submit-btn" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
