import * as React from 'react';
import StatisticCard from "./Card/StatisticCard.jsx";
import WeatherCard from "./Card/WeatherCard/WeatherCard";
import  OverviewCard from "./Card/OverviewCard";
import BarchartCard from "./Card/BarchartCard";
import LinechartCard from "./Card/LinechartCard";
import ReportBarchart from "dashboard-test/public/Config/ReportBarchart.js"
import ReportLinechart from "dashboard-test/public/Config/ReportLinechart.js"
import { Grid } from "@mui/material";


const Dashboard =()=>{
    return(
        <Grid>
            <StatisticCard/>
            <WeatherCard/>
            <BarchartCard  chart={ReportBarchart}/>
            <LinechartCard chart={ReportLinechart}/>
            <OverviewCard/>
        </Grid>
    );
}
export default Dashboard;