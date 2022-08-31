
import React from "react";
import LeftNavDrower from"./Components/LeftNavDrower.jsx";
import TopToolbar from "./Components/Header/TopToolbar.jsx";
import { Grid } from "@mui/material";
import Dashboard  from "./Components/Dashboard";

function App() {
  return (
    <>
      <TopToolbar />
      <LeftNavDrower />
      <Grid>
        <Dashboard/>
      </Grid>
    
    </>
  );
}
export default App;
