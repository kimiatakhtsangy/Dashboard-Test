import React, { useEffect, useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./WeatherCardstyle.css";
import axios from "axios";
import { ElectricBolt } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Weather = () => {
    const { t, i18n } = useTranslation();
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [typecity, setTypecity] = useState("");
  const [city, setCity] = useState("Tehran");
  const [img, setImg] = useState("");
  const [disc, setDisc] = useState("");

  const citySelect = (e) => {
    e.preventDefault();
    setCity(typecity);
  };

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22cf2f62316945f0feeb90bbf43187b0`
    ).then((res) => {
      setValue(res.data);
      setTemp(res.data.main);
      setImg(
        `http://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
      );
      setDisc(res.data.weather[0].description);
    });
  });

  return (
    <Card
      sx={{
        width: "300px",
        height: "350px",
        margin: "auto",
        padding: "auto",
        marginTop: "100px",
        paddingTop: "10px",
        textAlign: "center",
        borderRadius: "0.75rem",
        color: "black",
boxShadow : "5",
        backgroundColor: "white",
      }}
    >
      <p className="title">{t("Weather API")}</p>
      <form className="form" onSubmit={citySelect}>
        <TextField
          placeholder="which city ?"
          value={typecity}
          onChange={(e) => setTypecity(e.target.value)}
        />
<Button type="submit" >
<ElectricBolt  />
      </Button>
      </form>
      <Typography varient="h6" sx={{ textAlign: "center"  , my:2}}>
        {value.name}
      </Typography>
      <img src={img} alt="icon" className="img" />
      <Typography
        varient="h6"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "80px",
          color: "black",
        }}
      >
        {disc}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "-20px",
        }}
      >
        <p>
          {t("Min")} <br /> {`${Math.floor(temp.temp_min - 273.15)}°C`}
        </p>
        <Typography varient="h5">{`${Math.floor(
          temp.temp_min - 273.15
        )}°C`}</Typography>
        <p>
          {t("Max")} <br />
          {`${Math.floor(temp.temp_max - 273.15)} °C`}
        </p>
      </Box>
    </Card>
  );
};

export default Weather;
