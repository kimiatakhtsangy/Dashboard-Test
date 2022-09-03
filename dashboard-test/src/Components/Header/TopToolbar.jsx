import { useTranslation } from "react-i18next";
import {
  AccountCircle,
  Home,
  NotificationAdd,
  Notifications,
  Padding,
  Settings,
  SwitchRight,
} from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Box,
  MenuItem,
  Select,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Switch from "@mui/material/Switch";

const StyledToolbar = styled("div")(({}) => ({
  borderRadius: "0.75rem",
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "space-between",
  width: "100%",
  height: "4.5rem",
  backgroundColor: "rgba(0, 0, 0, 0.02);",
  position: "sticky",
  color: "rgb(52, 71, 103)",
  left: "305px",

  boxShadow: "rgb(255 255 255 / 90%) 0rem 0rem 0.0625rem 0.0625rem inset ",
  backdropFilter: "saturate(200%) blur(1.875rem) ",
  zIndex: "1100 ",
}));
const AppbarTheme = {
  borderRadius: "0.75rem",
  display: "flex",
  boxSizing: "border-box",
  justifyContent: "space-between",
  width: "78%",
  height: "4.5rem",
  backgroundColor: "rgba(0, 0, 0, 0.02);",
  position: "sticky",
  left: "305px",

  boxShadow: "rgb(255 255 255/ 90%) 0rem 0rem 0.0625rem 0.0625rem inset ",
  backdropFilter: "saturate(200%) blur(1.875rem) ",
  zIndex: "1100 ",
};

const TopToolbar = () => {
  const { t, i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };
  return (
    <AppBar sx={AppbarTheme}>
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            fontWeight: "100",
            justifyContent: "space-evenly",
            flexDirection: "row",
            margin: "5px",
            padding: "5px",
            top: "0",
            alignItems: "center",
          }}
        >
          <Home style={{ color: "#3c4858" }} />
          <div style={{ color: "#3c4858" }}>/</div>
          <Typography varient="h6" style={{ color: "#3c4858" }}>
            {t("Dashboard")}
          </Typography>
        </Box>
        <Typography
          sx={{
            position: "absolute",
            left: "15px",
            top: "50px",
            color: "rgb(52, 71, 103)",
            fontWeight: "bold",
          }}
        >
          {t("Dashboard")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "32%",
            height: "2rem",
            padding: "20px",
            alignItems: "center",
            marginLeft: "45rem",
          }}
        >
          <Select
            sx={{ marginTop: "-12px" }}
            onChange={changeLanguageHandler}
            label="en"
            defaultValue="en"
          >
            <MenuItem value="fa">fa</MenuItem>
            <MenuItem value="en'">en</MenuItem>
          </Select>
          <TextField label={t("search here")} type="search" />
          <AccountCircle style={{ color: "black" }} />
          <Settings style={{ color: "black" }} />
          <Notifications style={{ color: "black" }} />
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default TopToolbar;
