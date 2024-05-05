import {
  groupedRoleOptions,
  jobTypeOptions,
  locationOptions,
  minBasePayOptions,
  minExperienceOptions,
  techStackOptions,
} from "../utils/DropdownData";
import Dropdown from "./Dropdown";
import SearchBox from "./SearchBox";

const FilterHeader = () => {

  // TODO : 

  // const [remoteOnSite, setRemoteOnSite] = useState(null);
  // const [techStack, setTechStack] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [minExperience, setMinExperience] = useState(null);
  // const [minBasePay, setMinBasePay] = useState(null);
  // const [roles, setRoles] = useState(null);

  return (
    <div className="filter-row">
      <Dropdown
        title="Remote/on-site"
        options={jobTypeOptions}
        isMultipleOptionsAllowed={true}
      />
      <Dropdown
        title="Tech Stack"
        options={techStackOptions}
        isMultipleOptionsAllowed={true}
      />
      <Dropdown
        title="Min Experience"
        options={minExperienceOptions}
        isMultipleOptionsAllowed={false}
      />
      <Dropdown
        title="Min Base Pay"
        options={minBasePayOptions}
        isMultipleOptionsAllowed={false}
      />
      <Dropdown
        title="Roles"
        options={groupedRoleOptions}
        isMultipleOptionsAllowed={true}
      />
      <Dropdown
        title="Location"
        options={locationOptions}
        isMultipleOptionsAllowed={true}
      />
      <SearchBox />
    </div>
  );
};

export default FilterHeader;
