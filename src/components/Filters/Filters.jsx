import { IoSearch, IoLocationSharp } from "react-icons/io5";
import { useState } from "react";

const Filters = () => {
  const [searchTerms, setSearchTerms] = useState({
    multiple: "",
    location: "",
    fullTime: false,
  });

  const handleChange = (event) => {
    //   setInput(event.target.value.toLowerCase());
    setSearchTerms({
      ...searchTerms,
      [event.target.name]: event.target.value,
    });

    console.log(searchTerms);
  };

  return (
    <div className="form-float-container">
      <form action="">
        {/* Multi text filter */}
        <div className="filter-wrapper">
          <label htmlFor="multiple">
            <IoSearch />
          </label>
          <input
            type="text"
            value={searchTerms.multiple}
            onChange={handleChange}
            name="multiple"
            id="multiple"
            placeholder="Filter by title, companies, expertise…"
          />
        </div>

        {/* Location text filter */}
        <div className="filter-wrapper">
          <label htmlFor="location">
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
      </form>
    </div>
  );
};

export default Filters;
