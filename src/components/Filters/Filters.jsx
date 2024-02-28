import { IoSearch, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

const Filters = () => {
  // Text/terms Input States
  const [searchTerms, setSearchTerms] = useState({
    multiple: "",
    location: "",
  });

  const handleChange = (event) => {
    //   setInput(event.target.value.toLowerCase());
    setSearchTerms({
      ...searchTerms,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-float-container">
      <form action="">
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
            placeholder="Filter by title, companies…"
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
            placeholder="Filter by location..."
          />
        </div>

        {/* Checkbox && Submit  */}
        <div className="filter-wrapper submit-wrapper">
          <input
            type="checkbox"
            // value={searchTerms.location}
            // onChange={handleChange}
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