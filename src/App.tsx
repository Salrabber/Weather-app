import { LocationForm } from "./components/LocationForm";
import { UseCards } from "./hooks/cards";
import { SmallCard } from "./components/SmallCard";
import { ErrorMessage } from "./components/ErrorMessage";
import {useContext} from 'react'
import { Modal } from "./components/Modal";
import { ModalContext } from "./Context/ModalContext";

import "./styles/App.scss";
import { BigCard } from "./components/BigCard";


function App() {
  const { cards, error, newCard, setError, removeCard, findIndexById} = UseCards();
  const {open, modal, close, cardId} = useContext(ModalContext)

  return (
    <>
    {modal && <Modal onClose={close} >
      <BigCard data={cards[cardId]} />
    </Modal>}
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
            <SmallCard weather={card} key={card.id} removeCard={() => removeCard(card.id)} openModal={() => open(findIndexById(card.id))} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
