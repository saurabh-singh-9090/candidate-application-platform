import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";

const SearchBox = () => {
  const { jobData, filteredJobData, setFilteredJobData} = useContext(MyContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Apply filter whenever jobData or searcText changes
    applyFilter(); 
  }, [jobData, searchText]);


  const applyFilter = () => {
      const searchFilteredJobData = filteredJobData.filter((data) =>
      data.companyName.toLowerCase().includes(searchText.toLowerCase()));
      // Filter by company name works fine but it is working unexpectedly if used with other dropdown filters.hence commenting below line
      // setFilteredJobData(searchFilteredJobData);
  };

  return (
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        placeholder="Search Company Name"
        value={searchText} // input box is binded with the state variable 'searchText'
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
