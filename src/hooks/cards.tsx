import { useState } from "react";
import { WeatherData } from "../models";

export function UseCards() {
  const [cards, setCards] = useState<WeatherData[]>([]);
  const [error, setError] = useState("");

  function addCard(card: WeatherData) {
    setCards((prev) => [...prev, card]);
  }

  function newCard(card: WeatherData){
    if (cards.length !== 0 ){
      for (const item of cards){
        if (card.id == item.id){
          setError('This card already exist')
          return
        }
      }
      addCard(card)
    }else{
      addCard(card)
    }
  }

  return { cards, error, setError,newCard, addCard };
}
