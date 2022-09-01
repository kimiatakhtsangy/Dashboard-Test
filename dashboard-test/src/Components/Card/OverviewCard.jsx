import * as React from 'react';
import { Paper,Typography, Box,Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const OverviewCard = () => {
    return(
    <Paper sx={{
            width:'20%',
            height:'100%',
            display: 'flex',
            flexDirection: 'column',
            overFlowWrap: 'break-word',
            position: 'relative',
            py: '0.5rem',
            px: '0.5rem',
            my: '1rem',
            mx:'1rem',
            borderRadius:'0.75rem' ,
            overFlow: 'visible',
            boxShadow: "rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem",
            bgcolor:'white',}}
    >
        <Box >
            <Typography variant='h6' sx={{color:'rgb(52, 71, 103)',
            fontWeight: 600,
            letterSpacing: '0.0075em',
            lineHeight: '1.625',
            m:2,
            }}>Orders overview</Typography>
            <List> 
                <ListItem>
                    <ListItemAvatar sx={{color:'rgb(76, 175, 80)'}}>
                        <ArrowUpwardIcon/>
                    </ListItemAvatar>
                    <Typography variant="subtitle1" component="p" color={'rgb(123, 128, 154)'} sx={{ display: 'flex', justifyContent:'left',
                                fontSize: '0.875rem',
                                fontWeight: 300,
                                lineHeight: '1.5'}}>
                        <Typography sx={{color: 'rgb(123, 128, 154)',fontWeight: '700',mx:0.5}}> 24%  </Typography>   this month
                </Typography>
                </ListItem>
            </List>
            
           
            
        </Box>
        <Box>
            <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar >
                       <Avatar sx={{
                        width:'1rem',
                        height:'1rem',
                        mx:1,
                        p:1.5,
                        color:'white',
                        borderRadius:'100%',
                        bgcolor:'rgb(76, 175, 80)',
                        justifyItems:'center'}}>
                            <NotificationsIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText  primary="New order #1832412" secondary="21 DEC 11 PM"
                    sx={{
                        color:'rgb(52, 71, 103)',
                        lineHeight:1.5,
                        letterSpacing:'0.02em',
                    }}
                    />
                </ListItem>
            </List>
            <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar >
                       <Avatar sx={{
                        width:'1rem',
                        height:'1rem',
                        mx:1,
                        p:1.5,
                        color:'white',
                        borderRadius:'100%',
                        bgcolor:'rgb(244, 67, 53)',
                        justifyItems:'center'}}>
                            <InventoryIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="New order #1832412" secondary="21 DEC 11 PM"
                      sx={{
                        color:'rgb(52, 71, 103)',
                        lineHeight:1.5,
                        letterSpacing:'0.02em',
                    }}
                    />
                </ListItem>
            </List>
            <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar >
                       <Avatar sx={{
                        width:'1rem',
                        height:'1rem',
                        mx:1,
                        p:1.5,
                        color:'white',
                        borderRadius:'100%',
                        bgcolor:'rgb(26, 115, 232)',
                        justifyItems:'center'}}>
                            <ShoppingCartIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Server payments for April" secondary="21 DEC 9:34 PM"
                      sx={{
                        color:'rgb(52, 71, 103)',
                        lineHeight:1.5,
                        letterSpacing:'0.02em',
                    }}
                    />
                </ListItem>
            </List>
            <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar >
                       <Avatar sx={{
                        width:'1rem',
                        height:'1rem',
                        mx:1,
                        p:1.5,
                        color:'white',
                        borderRadius:'100%',
                        bgcolor:'rgb(251, 140, 0)',
                        justifyItems:'center'}}>
                            <CreditCardIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="New card added for order #4395133" secondary="20 DEC 2:20 AM"
                      sx={{
                        color:'rgb(52, 71, 103)',
                        lineHeight:1.5,
                        letterSpacing:'0.02em',
                    }}
                    />
                </ListItem>
            </List>
            <List  sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar >
                       <Avatar sx={{
                        width:'1rem',
                        height:'1rem',
                        mx:1,
                        p:1.5,
                        color:'white',
                        borderRadius:'100%',
                        bgcolor:'rgb(233, 30, 99)',
                        justifyItems:'center'}}>
                            <VpnKeyIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="New card added for order #4395133" secondary="18 DEC 4:54 AM"
                      sx={{
                        color:'rgb(52, 71, 103)',
                        lineHeight:1.5,
                        letterSpacing:'0.02em',
                    }}
                    />
                </ListItem>
            </List>

        </Box>
    </Paper>



    );
}
export default OverviewCard;