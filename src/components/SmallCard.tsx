import { WeatherData } from "../models";

import "../styles/SmallCard.scss";

interface SmallCardProps {
  weather: WeatherData;
}

export function SmallCard({ weather }: SmallCardProps) {
  return (
    <div className="weather-data">
      <h2>{weather.name}</h2>
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
