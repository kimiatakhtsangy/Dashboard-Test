import { Stack,Button } from "@mui/material";
import {DashboardIcon,TableViewIcon,ReceiptLongIcon,FormatTextdirectionRToLIcon,NotificationsIcon,PersonIcon,LoginIcon,AssignmentIcon} from '@mui/icons-material';



function Sidebar() {
    return (
      <Stack direction={"column"}>
        <DashboardIcon>Dashboard </DashboardIcon>
        <TableViewIcon>Tables</TableViewIcon> 
        <ReceiptLongIcon>Billing</ReceiptLongIcon> 
        <FormatTextdirectionRToLIcon>Rtl</FormatTextdirectionRToLIcon>
        <NotificationsIcon>Notification</NotificationsIcon>
        <PersonIcon>Profile</PersonIcon> 
        <LoginIcon>SignIn </LoginIcon>
        <AssignmentIcon>SignOut</AssignmentIcon>
        <Button variant="contained" color="white">UPGRADE TO PRO</Button>
      </Stack>
      );
}

export default Sidebar;