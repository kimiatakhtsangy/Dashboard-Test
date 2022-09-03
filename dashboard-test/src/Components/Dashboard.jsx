import * as React from 'react';
import LeftNavDrower from"./Components/LeftNavDrower.jsx";

import StatisticCard from "./Card/StatisticCard.jsx";
import WeatherCard from "./Card/WeatherCard/WeatherCard";
import  OverviewCard from "./Card/OverviewCard";
import BarchartCard from "./Card/BarchartCard";
import LinechartCard from "./Card/LinechartCard";
import ReportBarchart from "dashboard-test/public/Config/ReportBarchart.js";
import ReportLinechart from "dashboard-test/public/Config/ReportLinechart.js";
import ProjectsCard from "./Card/ProjectsCard";
import { Grid } from "@mui/material";


const Dashboard =()=>{
    return(
        <Stack>
            <LeftNavDrower />
        <Grid>
            <StatisticCard/>
            <WeatherCard/>
            <BarchartCard  chart={ReportBarchart}/>
            <LinechartCard chart={ReportLinechart}/>
            <ProjectsCard/>
            <OverviewCard/>
        </Grid>
        </Stack>
    );
}
export default Dashboard;