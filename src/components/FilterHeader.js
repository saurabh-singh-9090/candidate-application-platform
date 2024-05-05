import { 
  groupedRoleOptions, 
  jobTypeOptions, 
  locationOptions, 
  minBasePayOptions, 
  minExperienceOptions, 
  techStackOptions
} from "../utils/DropdownData";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";

const FilterHeader = () => {

  return (
    <div className="filter-row">
      <Dropdown title="Remote/on-site" options={jobTypeOptions} isMultipleOptionsAllowed={true}/>
      <Dropdown title="Tech Stack" options={techStackOptions} isMultipleOptionsAllowed={true}/>
      <Dropdown title="Min Experience" options={minExperienceOptions} isMultipleOptionsAllowed={false}/>
      <Dropdown title="Min Base Pay" options={minBasePayOptions} isMultipleOptionsAllowed={false}/>
      <Dropdown title="Roles" options={groupedRoleOptions} isMultipleOptionsAllowed={true}/>
      <Dropdown title="Location" options={locationOptions} isMultipleOptionsAllowed={true}/>
      <SearchBox/>
    </div>
  );
};

export default FilterHeader;
