import { useContext } from "react";
import JobCard from "./JobCard";
import { MyContext } from "../App";

const Body = () => {
  const { filteredJobData } = useContext(MyContext);

  return (
    <div className="card-container">
      {filteredJobData?.map((data) => {
        return <JobCard key={data.jdUid} jdData={data} />;
      })}
    </div>
  );
};

export default Body;
