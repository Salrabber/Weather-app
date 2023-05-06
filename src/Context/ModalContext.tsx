import React, {createContext, useState} from 'react'

interface IModalContext{
    modal: boolean;
    cardId: number;
    open: (id: number) => void;
    close: () => void;
    switchCard: (id: number) => void;
    
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    cardId: 0,
    switchCard: () =>{},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    open: () => {},
      // eslint-disable-next-line @typescript-eslint/no-empty-function
    close: () => {}
})


export const ModalState = ({children}:{children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const [cardId, setCardId] = useState(0)

    const open = (id: number) => {
        switchCard(id)
        setModal(true)
    }

    const close = () => setModal(false)

    const switchCard = (id: number) => setCardId(id)

    return(
        <ModalContext.Provider value={{modal, cardId, switchCard, open , close}}>
            {children}
        </ModalContext.Provider>
    )
}