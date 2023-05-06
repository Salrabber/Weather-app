import { useState } from "react";
import { WeatherData } from "../models";

export function UseCards() {
  const [cards, setCards] = useState<WeatherData[]>([]);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(false);
  

  function addCard(card: WeatherData) {
    // setCards((prev) => [...prev, card]);
    setCards((prevCards) => {
      const newCards = [...prevCards];
      newCards.unshift(card);
      return newCards;
    });
  }

  function findIndexById(id: number): number {
    return cards.findIndex((obj) => obj.id === id);
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

  function removeCard(id:number) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return { cards, error, setError,newCard,removeCard, addCard, modal, setModal, findIndexById };
}
