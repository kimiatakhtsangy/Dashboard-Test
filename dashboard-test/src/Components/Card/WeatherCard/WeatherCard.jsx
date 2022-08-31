import React, { useEffect, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
// import "./weather.css";
import axios from "axios";

const WeatherCard = () => {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [typecity, setTypecity] = useState("");
  const [city, setCity] = useState("Delhi");
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
    <Paper
      sx={{
        width: "300px",
        height: "300px",
        margin : "auto",
        marginTop: "100px",
        paddingTop: "30px",
        textAlign: "center",
        backgroundImage: "linear-gradient(#56CCF2, #2F80ED)",
        color: "black",
        textShadow: "2px 2px 8px black",
        boxShadow: "2px 2px 12px 2px white",
      }}
    >
      <p className="title">Weather API</p>
      <form className="form" onSubmit={citySelect}>
        <TextField
        sx={{height :"2rem" }}
          placeholder="which city ?"
          value={typecity}
          onChange={(e) => setTypecity(e.target.value)}
        />

        <Button variant="contained" disableElevation type="submit">
          Check Weather
        </Button>
      </form>
      <Typography varient="h6" sx={{ textAlign: "center" }}>
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
          marginBottom : "-20px"

        }}
      >
        <p>
          
          Min <br /> {`${Math.floor(temp.temp_min - 273.15)}°C`}
        </p>
        <Typography varient="h5">{`${Math.floor(
          temp.temp_min - 273.15
        )}°C`}</Typography>
        <p>
          Max <br />
          {`${Math.floor(temp.temp_max - 273.15)} °C`}
        </p>
      </Box>
    </Paper>
  );
};

export default WeatherCard;