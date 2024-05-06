import { useEffect, useState } from "react";
import { WEEKDAY_API } from "./constants";
import useInfiniteScrolling from "./useInfiniteScrolling";

const useFetchData = () => {

    const [jobData, setJobData] = useState([]);
    const [filteredJobData, setFilteredJobData] = useState([]);
    const [fetchedJobIds, setFetchedJobIds] = useState([]);

    // A custom hook for updating the 'limit' value for fetching the data during infinite scrolling
    const [limit] = useInfiniteScrolling();
  
    // fetchData function is responsible for fetching the API data and storing the data in the state variables jobId and filteredJobData
    const fetchJobData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      //'limit' increases by +4 during infinite scrolling
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
  
      // Filtering out already fetched job card IDs to avoid duplicate cards rendering
      const newJobData = data.jdList.filter(
        (job) => !fetchedJobIds.includes(job.jdUid),
      );
      setJobData((prev) => [...prev, ...newJobData]);
  
      // filteredData will be used and updated everywhere inside the components and will be accessible everywhere through context API
      setFilteredJobData((prev) => [...prev, ...newJobData]);
      setFetchedJobIds((prev) => [
        ...prev,
        ...newJobData.map((job) => job.jdUid),
      ]);
    };
  
    useEffect(() => {
      fetchJobData();
    }, [limit]);

    return [jobData, filteredJobData, setFilteredJobData];
}

export default useFetchData;