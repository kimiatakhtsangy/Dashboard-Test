


import React from "react";
import LeftNavDrower from"./Components/LeftNavDrower.jsx";
import TopToolbar from "./Components/Header/TopToolbar.jsx";
import { Grid } from "@mui/material";
import Dashboard  from "./Components/Dashboard";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
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
