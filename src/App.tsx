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
  const { cards, error, newCard, setError, removeCard, findIndexById, extreme, setExtreme} = UseCards();
  const {open, modal, close, cardId, switchCard} = useContext(ModalContext);
  
  function switchLeft(){
    switchCard(cardId-1)
    setExtreme('empty')
    if(cardId == 1){
      setExtreme('left')
    }
    
  }
  function switchRight(){
    switchCard(cardId +1)
    setExtreme('empty')
    if(cardId == cards.length-2){
      setExtreme('right')
    }
  }
  function openCard(id: number){
    const cardId = findIndexById(id)
    setExtreme('empty')
    if(cardId == 0){
      setExtreme('left')
    }
    if(cardId == cards.length -1 ){
      setExtreme('right')
    }
    if(cards.length == 1){
      setExtreme('both')
    }
    
    return findIndexById(id)
  }
  
  return (
    <>
    {modal && <Modal extreme={extreme} onClose={close} switchLeft={switchLeft} switchRight={switchRight} >
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
          {cards.map((card) => (
            <SmallCard weather={card} key={card.id} removeCard={() => removeCard(card.id)} openModal={() => open(openCard(card.id))} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
