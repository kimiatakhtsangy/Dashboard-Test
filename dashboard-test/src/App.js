
import React from "react";
import TopToolbar from "./Components/Header/TopToolbar.jsx";
import { Grid } from "@mui/material";
import Dashboard  from "./Components/Dashboard";

function App() {
  return (
    <>
      <TopToolbar />
      
      <Grid>
        <Dashboard/>
      </Grid>
    
    </>
  );
}
export default App;
