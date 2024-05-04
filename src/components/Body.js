import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import { WEEKDAY_API } from "../utils/constants";
import Loader from "./Loader";

const Body = () => {
  const [jobData, setJobData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [fetchedJobIds, setFetchedJobIds] = useState([]);

  const fetchJobData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: limit,
    });

    const requestOptions = {
      offset: 0,
      method: "POST",
      headers: myHeaders,
      body,
    };

    const response = await fetch(WEEKDAY_API, requestOptions);
    const data = await response.json();
    // setJobData((prev) => [...prev, ...data.jdList]);

    // Filtering out already fetched job card IDs
    const newJobData = data.jdList.filter(
      (job) => !fetchedJobIds.includes(job.jdUid)
    );

    setJobData((prev) => [...prev, ...newJobData]);
    setFetchedJobIds((prev) => [
      ...prev,
      ...newJobData.map((job) => job.jdUid),
    ]);

    setLoading(false);
    console.log("DATA--->>>", data);
  };

  useEffect(() => {
    fetchJobData();
  }, [limit]);

  const InfiniteScrollHandler = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setLimit((prev) => prev + 3);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", InfiniteScrollHandler);
    return () => window.removeEventListener("scroll", InfiniteScrollHandler);
  }, []);

  return (
    <div className="card-container">
      {
        jobData?.map((data) => {
          return <JobCard key={data.jdUid} jdData={data} />
        }
        )
      }
    </div>
  );
};

export default Body;
