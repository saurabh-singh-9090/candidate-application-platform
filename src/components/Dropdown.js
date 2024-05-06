import Select from "react-select";
import { MyContext } from "../App";
import { useContext, useEffect, useState } from "react";

const Dropdown = (props) => {

  const { jobData, setFilteredJobData, filteredArray, setFilteredArray } = useContext(MyContext);

  const [selectedOption, setSelectedOption] = useState(null);
  const { title, options, isMultipleOptionsAllowed } = props;

  useEffect(() => {
    let filteredData1 = [];
    if (filteredArray.length > 0) {
      filteredArray.map((option) => {
        const data = dropdownFilterHandler(option);
        return (filteredData1 = data && [...filteredData1, ...data]);
      });
      // Apply filter whenever jobData changes
      setFilteredJobData(filteredData1);
    }
  }, [jobData, filteredArray, selectedOption]);

  const dropdownFilterHandler = (option) => {
    const { value, label } = Array.isArray(option) ? option[0] : option;
    const key = value?.split("_")[0];
    const isDropdownSelectedFilterRelevant = jobData[0].hasOwnProperty(key);
    if (isDropdownSelectedFilterRelevant && option) {
      const dropdownFilteredJobData = jobData.filter((data) =>
        data[key]?.toLowerCase().includes(label.toLowerCase())
      );
      return dropdownFilteredJobData;
    } else {
      console.log("Entered Filter value is not relevant");
    }
  };


  /* NOTE : Currently handlechange() function works fine for 'Roles' & 'Location' dropdown filters Only.
     For other dropdown Filters, Logic implementation is pending
  */
  const handleChange = (selectedOption) => {
    console.log("selected---->>>>",selectedOption)
    setSelectedOption(selectedOption);
    // Extracting values from selected options
    const selectedValues = Array.isArray(selectedOption) ? selectedOption?.map((option) => option) : null; 
    if(selectedValues == null) {return} ; //TODO
    Array.isArray(selectedOption)
      ? setFilteredArray(selectedOption)
      : setFilteredArray((prevFilteredArray) => [ ...prevFilteredArray, ...selectedValues]);
  };

  return (
    <div className="dropdown">
      <p>{title}</p>
      <Select
        closeMenuOnSelect={true}
        isMulti={isMultipleOptionsAllowed}
        options={options}
        placeholder={title}
        onChange={handleChange}
        value={selectedOption}
      />
    </div>
  );
};

export default Dropdown;
