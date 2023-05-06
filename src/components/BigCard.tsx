import { WeatherData } from "../models";
import "../styles/BigCard.scss";

interface BigCardProps {
  data: WeatherData;
  onDelete?: () => void;
}

export function BigCard({ data }: BigCardProps) {
  return (
    <div className="bc-card">
      <div className="header"></div>
      <div className="body">
        <div className="weather">
          <h2 className="title">{data.name}</h2>
          <div className="temperature">{data.main.temp}°C</div>
          <div className="description">{data.weather[0].description}</div>
        </div>
        <div className="details">
          <div className="detail">
            <div className="bc-label">Humidity:</div>
            <div className="value">{data.main.humidity}%</div>
          </div>
          <div className="detail">
            <div className="bc-label">Wind:</div>
            <div className="value">{data.wind.speed} km/h</div>
          </div>
          <div className="detail">
            <div className="bc-label">Sea level:</div>
            <div className="value">{data.main.sea_level} m</div>
          </div>
          <div className="detail">
            <div className="bc-label">Coordinates:</div>
            <div className="value">
              {data.coord.lat}, {data.coord.lon}
            </div>
          </div>
          <div className="detail">
            <div className="bc-label">Country:</div>
            <div className="value">{data.sys.country}</div>
          </div>
          <div className="detail">
            <div className="bc-label">Timezone:</div>
            <div className="value">{data.timezone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
