import { LocationForm } from "./components/LocationForm";
import { useState } from "react";
import { UseCards } from "./hooks/cards";
import { SmallCard } from "./components/SmallCard";
import { ErrorMessage } from "./components/ErrorMessage";

import "./styles/App.scss";
import { WeatherData } from "./models";

function App() {
  const {cards, error, newCard, setError} = UseCards();

  return (
    <>
      <div className="container">
        <h1>Hello wrld..</h1>
        <LocationForm fetchData={newCard} />
        {error && <ErrorMessage errorMsg={error} close={() => setError("")}/>}
        {cards.map((card) => (
          <SmallCard card={card} key={card.id} />
        ))}
      </div>
    </>
  );
}

export default App;
