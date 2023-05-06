import { WeatherData } from "../models";

import "../styles/SmallCard.scss";

interface SmallCardProps {
  weather: WeatherData;
  removeCard: () => void;
  openModal: () => void;
}

export function SmallCard({ weather, removeCard, openModal }: SmallCardProps) {
  return (
    <div className="sc-weather-data"
    onClick={openModal}
    >
      <svg
       onClick={removeCard}
        className="sc-weather-data__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="red"
          d="M19.4 4.1l.1.1c.4.4.4 1 0 1.4L5.5 19.8c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l13.9-13.9c.4-.4 1-.4 1.4 0z"
        />
        <path
          fill="red"
          d="M4.6,4.1c-0.4,0.4-0.4,1,0,1.4l13.9,13.9c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L6,4.1C5.6,3.7,5,3.7,4.6,4.1z"
        />
        <path fill="none" d="M0,0h24v24H0V0z" />
      </svg>

      <h2 className="sc-weather-data__title">{weather.name}</h2>
      <img
        className="sc-weather-icon"
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
      <div>
        <p className="sc-weather-description">{weather.weather[0].description}</p>
        <p className="sc-weather-temperature">{weather.main.temp}&deg;C</p>
      </div>
    </div>
  );
}
