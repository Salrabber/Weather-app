import { LocationForm } from "./components/LocationForm";
import { UseCards } from "./hooks/cards";
import { SmallCard } from "./components/SmallCard";
import { ErrorMessage } from "./components/ErrorMessage";

import "./styles/App.scss";

function App() {
  const { cards, error, newCard, setError } = UseCards();

  return (
    <>
      <div className="container">
        <div className="top__content">
          <h1>Hello wrld..</h1>
          <LocationForm fetchData={newCard} />
          {error && (
            <ErrorMessage errorMsg={error} close={() => setError("")} />
          )}
        </div>
        <div className="cards-list">
          {cards.map((card) => (
            <SmallCard weather={card} key={card.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
