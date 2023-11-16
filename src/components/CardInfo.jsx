import React from "react"
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const prevDefault = (e) => {
    e.preventDefault()
    console.log('now prevented')
}




const CardInfo = () => {
 const {input, setInputs} = useContext(UserContext)
 const {cardNumbers, setCardNumbers} = useContext(UserContext)
 const {cvc, setCvc} = useContext(UserContext)

    const handleInputs = (e) =>{
        setInputs(e.target.value)
        console.log(handleInputs, 'newly')
    }

   const CardNUmberset =(e)=>{
    setCardNumbers(e.target.value) 
   }

   const handleCvc =(e)=>{
    setCvc(e.target.value)
   }

    return (
        <form 
        onClick={prevDefault}
        >
            <div className="cardholder">
                <label htmlFor="label">CARDHOLDER NAME</label> <br />
                <input type="text" 
                placeholder="cardholder" 
                onChange={handleInputs}
                value={input}
                />
            </div>

            <div className="card-number">
                <label htmlFor="cardnumber">CARD NUMBER</label> <br />
                <input type="text" 
                placeholder="card number" 
                onChange={CardNUmberset}
                value={cardNumbers}
                />
            </div>

            <div className="date">
                <div className="number-date">
                    <div className="expiry-container">
                        <label htmlFor="expiry">EXP. DATE (MM/YY)</label>
                    </div>
                    <div className="number-container">
                        <input type="number"
                            className="month-number" 
                            placeholder="MM" 
                            
                            />
                        <input type="year"
                            className="year" 
                            placeholder="YY" 
                            
                            />
                    </div>
                </div>

                <div className="cve-container">
                    <label htmlFor="cve">CVC</label>
                    <input type="number"
                        className="cve" 
                        placeholder="e.g 123" 
                        onChange={handleCvc}
                        value={cvc}
                        />
                </div>
            </div>
            <button 
            type="submit" 
          
            >Confirm</button>
        </form>
    )
}

export default CardInfo