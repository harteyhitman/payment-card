import { createContext, useState } from "react";

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const [card, setCard] = useState([
        {
            id: 1,
            number: '0000 0000 0000 0000',
            cvc: '123',
            name: 'MY NAME',
            expiry: '00/00'
        }
    ])

    const [input, setInputs] =useState('')
    const [cardNumbers, setCardNumbers] = useState('')
    const [cvc, setCvc] = useState('')
    return(
        <UserContext.Provider value={{
            card,  setCard,
            input, setInputs,
            cardNumbers, setCardNumbers,
            cvc, setCvc,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext