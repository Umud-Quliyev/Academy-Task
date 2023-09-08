import React, { useEffect, useRef, useState } from "react";
import style from "./assets/style.module.css";

export default function App() {
  const [city, setCity] = useState([]);
  const [cityname, setCityname] = useState("baku");
  const ref = useRef();

  const handleClick = () => {
    const cityName = ref.current.value;
    setCityname(cityName);
  };

  useEffect(() => {
    fetchWeatherData(cityname);
  }, [cityname]);

  const fetchWeatherData = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3c04967b42798a835a62bcb0f3d7c470`
    )
      .then((res) => res.json())
      .then((data) => {
        setCity({
          cityname: data.name,
          weather: data.main.temp,
          coord_l: data.coord.lon,
          weathertype: data.weather[0].main,
          country: data.sys.country,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
        });
      });
  };

  return (
    <div className={style.container}>
      <div className={style.weather_side}>
        <div className={style.weather_gradient}></div>
        <div className={style.date_container}>
          <h2 className={style.date_dayname}>{city.cityname}</h2>
          <span className={style.date_day}>{city.country}</span>
          <i className={style.location_icon} data-feather="map-pin"></i>
          <span className={style.location}>{city.coord_l}</span>
        </div>
        <div className={style.weather_container}>
          <i className={style.weather_icon} data-feather="sun"></i>
          <h1 className={style.weather_temp}>
            {Math.floor(city.weather - 273.15)}
          </h1>
          <h3 className={style.weather_desc}>{city.weathertype}</h3>
        </div>
      </div>
      <div className={style.info_side}>
        <div className={style.today_info_container}>
          <div className={style.today_info}>
            <div className={style.precipitation}>
              {" "}
              <span className={style.title}>PRECIPITATION</span>
              <span className={style.value}>{city.pressure}</span>
              <div className={style.clear}></div>
            </div>
            <div className={style.humidity}>
              {" "}
              <span className={style.title}>HUMIDITY</span>
              <span className={style.value}>{city.humidity}</span>
              <div className={style.clear}></div>
            </div>
            <div className={style.wind}>
              {" "}
              <span className={style.title}>WIND</span>
              <span className={style.value}>{city.wind}</span>
              <div className={style.clear}></div>
            </div>
          </div>
        </div>
        <div className={style.week_container}>
          <ul className={style.week_list}>
            <li className={style.active}>
              <i className={style.day_icon} data-feather="sun"></i>
              <span className={style.day_name}>Tue</span>
              <span className={style.day_temp}>29°C</span>
            </li>
            <li>
              <i className={style.day_icon} data-feather="cloud"></i>
              <span className={style.day_name}>Wed</span>
              <span className={style.day_temp}>21°C</span>
            </li>
            <li>
              <i className={style.day_icon} data-feather="cloud-snow"></i>
              <span className={style.day_name}>Thu</span>
              <span className={style.day_temp}>08°C</span>
            </li>
            <li>
              <i className={style.day_icon} data-feather="cloud-rain"></i>
              <span className={style.day_name}>Fry</span>
              <span className={style.day_temp}>19°C</span>
            </li>
            <div className={style.clear}></div>
          </ul>
        </div>
        <div className={style.location_container}>
          <input
            type="text"
            className={style.location_input}
            placeholder="Search City"
            id="cityname"
            name="cityname"
            ref={ref}
          />
          <button onClick={handleClick} className={style.location_button}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
