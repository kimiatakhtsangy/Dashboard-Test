
import React from "react";
import LeftNavDrower from"./Components/LeftNavDrower.jsx";
import TopToolbar from "./Components/Header/TopToolbar.jsx";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <TopToolbar />
      <Stack justifyContent="space-between" direction="row" spacing={2}>
        <LeftNavDrower />
      </Stack>
    </>
  );
}
export default App;
