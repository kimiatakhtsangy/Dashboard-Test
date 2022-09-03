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
  import { Bar } from "react-chartjs-2";
  import BarchartConfig from "dashboard-test/public/Config/BarchartConfig.js"
  
  const BarchartCard =({chart })=>{
    const { data, options } = BarchartConfig(chart.labels || [], chart.datasets || {});
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
                              bgcolor:'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
                              coloredShadow:'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.62',}}>
                            <Bar data={data} options={options} />
                              </Box>
                         ))}
                      <Typography gutterBottom variant="h5" m={1}>
                       Website Views
                      </Typography>
                      <Typography variant="body2" color='rgb(123, 128, 154)' m={1}>
                       Last Campaign Performance
                      </Typography>
                      <Divider/>
                   <List> 
                     <ListItem>
                      <ListItemAvatar fontSize='small' sx={{color:'rgb(123, 128, 154)'}}>
                          <AccessTimeIcon/>
                      </ListItemAvatar>
                      <Typography variant="subtitle1"  color={'rgb(123, 128, 154)'} m={1} sx={{ display: 'flex', justifyContent:'left',
                                  fontSize: '0.875rem',
                                  fontWeight: 300,
                                  lineHeight: '1.5'}}>
                            campaign sent 2 days ago</Typography>
                     </ListItem>
                  </List>
                </Card>
  
              </Box>
          </Paper>
      );
      }
      export default BarchartCard ;