import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { WEEKDAY_API } from "../utils/constants";

const Body = () => {
  const [jobData, setJobData] = useState([]);

  const fetchJobData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 4,
    });

    const requestOptions = {
      offset: 0,
      method: "POST",
      headers: myHeaders,
      body,
    };

    const response = await fetch( WEEKDAY_API, requestOptions);
    const data = await response.json();
    setJobData(data);
    console.log("DATA--->>>",data)
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div className="card-container">
        {/* <h3>Total Jobs available : {jobData.totalCount}</h3> */}
        {jobData?.jdList?.map((data)=>(
            <JobCard key={data.jdUid} jdData={data}/>
        ))}
    </div>
  );
};

export default Body;
