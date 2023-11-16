import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Cards = () => {

    const {card,cardNumbers,input, cvc} = useContext(UserContext)

    return (
        <div className='card-container'>
            <div className="upper-card">
                <div className='circle'>
                     <div className="card-logo coloured"></div>
                <div className="card-logo transparent"></div>
                </div>
               <div className="details">
                 <h2>{cardNumbers}</h2>
                 <div className="small-details">
                    <p>{input}</p>
                    <p>{card[0].expiry}</p>
                 </div>
                
               </div>
            </div>
            <br />
            <div className="lower-card-con">
                <div className="lower-card">
                    <p>{cvc}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Cards