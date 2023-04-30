import { LocationForm } from "./components/LocationForm";
import { UseCards } from "./hooks/cards";
import { SmallCard } from "./components/SmallCard";
import { ErrorMessage } from "./components/ErrorMessage";

import "./styles/App.scss";

function App() {
  const { cards, error, newCard, setError, removeCard } = UseCards();

  return (
    <>
      <div className="container">
        <div className="top__content">
          <h2>Hello wrld..</h2>
          <LocationForm fetchData={newCard} />
          {error && (
            <ErrorMessage errorMsg={error} close={() => setError("")} />
          )}
        </div>
        <div className="cards-list">
          {cards.reverse().map((card) => (
            <SmallCard weather={card} removeCard={() => removeCard(card.id)} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
