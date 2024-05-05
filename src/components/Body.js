import { useContext } from "react";
import JobCard from "./JobCard";
import Loader from "./Loader";
import { MyContext } from "../App";

const Body = (props) => {
  const { filteredJobData  } = useContext(MyContext);
  const { loading} = props;

  return (
    <div className="card-container">
      {filteredJobData?.map((data) => {
        return <JobCard key={data.jdUid} jdData={data} />;
      })}
      {loading && <Loader />}
    </div>
  );
};

export default Body;
