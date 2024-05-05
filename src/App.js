import { useEffect, useState } from 'react';
import Body from './components/Body';
import FilterHeader from './components/FilterHeader';
import { WEEKDAY_API } from './utils/constants';
import { createContext } from 'react';
import './App.css';

export const MyContext = createContext("");

function App() {
  const [jobData, setJobData] = useState([]);
  const [filteredJobData, setFilteredJobData] = useState([])
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [fetchedJobIds, setFetchedJobIds] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  // fetchData function is responsible for fetching the API data and storing the data in the state variables jobId and filteredJobData
  const fetchJobData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //'limit' increases by +3 while infinite scrolling
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
      (job) => !fetchedJobIds.includes(job.jdUid)
    );

    setJobData((prev) => [...prev, ...newJobData]);

    // filteredData will be used and updated everywhere inside the components and will be accessible everywhere through context API
    setFilteredJobData((prev) => [...prev, ...newJobData]);
    setFetchedJobIds((prev) => [...prev, ...newJobData.map((job) => job.jdUid)]);

    setLoading(false);
  };

  useEffect(() => {
    fetchJobData();
  }, [limit]);

  //Handler fn to control infinite scrolling feature
  const InfiniteScrollHandler = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight
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
    <div className="App">
      <MyContext.Provider value={{ jobData, filteredJobData, setFilteredJobData, filteredArray, setFilteredArray }}>
        <FilterHeader />
        <Body loading={loading} />
      </MyContext.Provider>
    </div>
  );
}

export default App;
