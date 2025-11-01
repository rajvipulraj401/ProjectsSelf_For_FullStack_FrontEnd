// // -------------------- Version 0: when we are not getting props --------------------

// import React, { useState, useEffect } from "react";

// import Cards from "./components/Cards/Cards";
// import "./App.css";

// // ❌ NO INTERFACE DEFINED HERE

// const App: React.FC = () => {
//   // ❌ OLD: Using generic object[] type
//   const [data, setData] = useState<object[]>([]);

//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetchData = async (url: string) => {
//       try {
//         setLoading(true);
//         const response = await fetch(url);
//         const result = await response.json();

//         console.log(result.data);

//         if (result.error == false && result.data.length > 0) {
//           setData(result.data);
//         } else {
//           throw new Error("No data found");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData("https://countriesnow.space/api/v0.1/countries/flag/images");
//   }, []);

//   return (
//     <>
//       <div className="app-container">
//         {loading && <h1>Loading...</h1>}

//         {/* ❌ OLD: TypeScript Error - curr.name and curr.flag not recognized */}
//         {data.map((curr: object, i: number) => (
//           <Cards key={i} title={curr.name} image={curr.flag}></Cards>
//           //                    ^^^^^ ERROR!      ^^^^^ ERROR!
//           // TypeScript: "I don't know if 'name' and 'flag' exist on object!"
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

// ----------------------------------------------correct code----------------------------------------------

// Version 1: when we are not getting props

import React, { useState, useEffect } from "react";

import Cards from "./components/Cards/Cards";
import "./App.css";

// ✅ Step 1: Define Interface for API Response Data
// This interface tells TypeScript what structure the country data will have
interface CountryData {
  name: string; // Country name
  flag: string; // Flag image URL
  iso2: string; // ISO 2-letter code
  iso3: string; // ISO 3-letter code
}

// ✅ Step 2: Define App Component with React.FC type
// React.FC tells TypeScript this is a functional component
const App: React.FC = () => {
  // ✅ Step 3: State for storing country data
  // useState<CountryData[]> means: array of CountryData objects
  // [] is the initial value (empty array)
  const [data, setData] = useState<CountryData[]>([]);

  /* 🌟🌟🌟🌟HUME YAHA CountryData[]  is an array of Objects ....  AUR OBJECT ME KYA  KYAHAI WO BHI BATANA PDTA HAI ISLEA AISa kiya gya
  gya interface mein define kr dia hai
*/

  // ✅ Step 4: State for loading indicator
  // Boolean state to track if data is being fetched
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Step 5: useEffect hook - runs once when component mounts
  useEffect(() => {
    // ✅ Step 6: Async function to fetch data from API
    // url: string - parameter for API endpoint
    const fetchData = async (url: string) => {
      try {
        // Set loading to true before starting fetch
        setLoading(true);

        // Fetch data from API
        const response = await fetch(url);

        // Convert response to JSON
        const result = await response.json();

        // Log data for debugging
        console.log(result.data);

        // ✅ Step 7: Check if API call was successful and has data
        // result.error == false means no error
        // result.data.length > 0 means data array is not empty
        if (result.error == false && result.data.length > 0) {
          // Store the data in state
          setData(result.data);
        } else {
          // Throw error if no data found
          throw new Error("No data found");
        }
      } catch (error) {
        // ✅ Step 8: Handle errors
        // Log error if something goes wrong
        console.error("Error fetching data:", error);
      } finally {
        // ✅ Step 9: Always set loading to false when done
        // This runs whether success or error
        setLoading(false);
      }
    };

    // ✅ Step 10: Call fetchData function with API URL
    fetchData("https://countriesnow.space/api/v0.1/countries/flag/images");
  }, []); // ✅ Empty dependency array = runs only once when component mounts

  // ✅ Step 11: Render component
  return (
    <>
      <div className="app-container">
        {/* ✅ Step 12: Show loading message if data is being fetched */}
        {loading && <h1>Loading...</h1>}

        {/* ✅ Step 13: Map through data array and render Cards component */}
        {/*
          data.map() - loops through each country in the data array
          (curr: CountryData, i: number) -
            curr = current country object (typed as CountryData)
            i = index (position in array)
          key={i} - React needs unique key for each element
          title={curr.name} - Pass country name as title prop
          image={curr.flag} - Pass flag URL as image prop
        */}
        {data.map((curr: CountryData, i: number) => (
          <Cards key={i} title={curr.name} image={curr.flag}></Cards>
        ))}
      </div>
    </>
  );
};

export default App;

/**
 * 📝 Logic Flow:
 *
 * 1. Create interface for API response data structure
 * 2. Create App component with React.FC type
 * 3. Create state to store country data array
 * 4. Create loading state to track fetch status
 * 5. Use useEffect to fetch data when component mounts
 * 6. Fetch data from API using async/await
 * 7. Check if API call was successful
 * 8. Store data in state if successful
 * 9. Handle errors if something goes wrong
 * 10. Always set loading to false when done
 * 11. Render Cards component for each country in the data array
 */
