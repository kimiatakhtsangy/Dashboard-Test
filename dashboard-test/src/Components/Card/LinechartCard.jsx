import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );
  
  
  
  
  import { useMemo } from "react";
  import { Box, Card, Divider, Paper, Typography } from "@mui/material";
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  import List from '@mui/material/List';
  import ListItem from '@mui/material/ListItem';
  import ListItemAvatar from '@mui/material/ListItemAvatar';
  import { Line } from "react-chartjs-2";
  import LinechartConfig from "dashboard-test/public/Config/LinechartConfig.js";
  
  const LinearchartCard =({ chart})=>{
      const { data, options } = LinechartConfig(chart.labels || [], chart.datasets || {});
      return(
  
          <Paper width='20%' height='100%'>
              <Box>
                  <Card>
                  {useMemo(
                         () => (
                      <Box  variant="gradient"
                        borderRadius="lg"
                        py={2}
                        pr={0.5}
                        mt={-5}
                        height="12.5rem"  sx={{ padding: "0.75rem 1.25rem",
                              marginBottom: "0",
                              borderBottom: "none",
                              background: "transparent",
                              zIndex: "3 !important",
                              bgcolor:'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
                              coloredShadow:'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(76 175 79 / 40%) 0rem 0.4375rem 0.62',}}>
                             <Line data={data} options={options} />
                              </Box>
                         ))}
                      <Typography gutterBottom variant="h5" m={1}>
                      Daily Sales
                      </Typography>
                      <Typography variant="body2" color='rgb(123, 128, 154)' m={1} >
                      (<strong>+15%</strong>) increase in today sales.
                      </Typography>
                      <Divider/>
                   <List> 
                     <ListItem>
                      <ListItemAvatar fontSize='small' sx={{color:'rgb(123, 128, 154)'}}>
                          <AccessTimeIcon/>
                      </ListItemAvatar>
                      <Typography variant="subtitle1"  color={'rgb(123, 128, 154)'} sx={{ display: 'flex', justifyContent:'left',
                                  fontSize: '0.875rem',
                                  fontWeight: 300,
                                  lineHeight: '1.5'}}>
                            updated 4 min ago</Typography>
                     </ListItem>
                  </List>
                </Card>
  
              </Box>
          </Paper>
      );
      }
      export default LinearchartCard ;