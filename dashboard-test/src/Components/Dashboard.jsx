import * as React from 'react';
import StatisticCard from "./Card/StatisticCard.jsx";
import WeatherCard from "./Card/WeatherCard/WeatherCard";
import  OverviewCard from "./Card/OverviewCard";
import { Grid } from "@mui/material";


const Dashboard =()=>{
    return(
        <Grid>
            <StatisticCard/>
            <WeatherCard/>
            <OverviewCard/>
        </Grid>
    );
}
export default Dashboard;