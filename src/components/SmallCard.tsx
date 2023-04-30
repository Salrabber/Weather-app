import { WeatherData } from "../models";

import "../styles/SmallCard.scss";

interface SmallCardProps {
  weather: WeatherData;
  removeCard: () => void;
}

export function SmallCard({ weather, removeCard }: SmallCardProps) {
  return (
    <div className="weather-data">
      <svg
       onClick={removeCard}
        className="weather-data__svg"
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

      <h2 className="weather-data__title">{weather.name}</h2>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
      <div>
        <p className="weather-description">{weather.weather[0].description}</p>
        <p className="weather-temperature">{weather.main.temp}&deg;C</p>
      </div>
    </div>
  );
}
