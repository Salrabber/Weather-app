import { WeatherData } from "../models";

interface SmallCardProps {
    card: WeatherData
}

export function SmallCard({card}: SmallCardProps){
    return(
        <div className="wrapper">
            <h1>{card.name}</h1>
        </div>
    )
}