import { useState } from "react";
import { WeatherData } from "../models";
import { ErrorMessage } from "../components/ErrorMessage";

export function UseCards() {
  const [cards, setCards] = useState<WeatherData[]>([]);
  const [error, setError] = useState("");

  function addCard(card: WeatherData) {
    if (cards.length) {
      for (const item of cards) {
        if (item.id === card.id) {
          console.log('hui')
          setError("This card already exist")
          return(
            <ErrorMessage errorMsg={error} />
          );
        } else {
          setCards((prev) => [...prev, card]);
        }
      }
    }else{
    setCards(prev => [...prev, card])
    }

  }

  return { cards, error, setError, addCard };
}
