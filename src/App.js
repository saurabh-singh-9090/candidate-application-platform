import { useState } from "react";
import Body from "./components/Body";
import FilterHeader from "./components/FilterHeader";
import { createContext } from "react";
import "./App.css";
import useFetchData from "./utils/useFetchData";

export const MyContext = createContext("");

function App() {

  const [filteredArray, setFilteredArray] = useState([]);

  // A custom Hook to fetch data from the API
  const [jobData, filteredJobData, setFilteredJobData ] = useFetchData();

  return (
    <div className="App">
      {/* Wrapping the App with the context API provider to make certain values globally available to be used or modified */}
      <MyContext.Provider
        value={{
          jobData,
          filteredJobData,
          setFilteredJobData,
          filteredArray,
          setFilteredArray,
        }}
      >
          <FilterHeader />
          <Body />
      </MyContext.Provider>
    </div>
  );
}

export default App;
