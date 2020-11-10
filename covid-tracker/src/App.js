import React, { useState } from 'react'
import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

function App() {
  const[countries, setCountries] = useState(['USA', 'UK', 'INDIA']);


  return (
    <div className="app">
      <div className="app__header"> 
      <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined" value="abc">
            {
              countries.map(country => (
                <MenuItem value={country}>{country}</MenuItem>
              ))
            }                

            {/* <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem> */}
          </Select>
        </FormControl>
      </div>


      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
