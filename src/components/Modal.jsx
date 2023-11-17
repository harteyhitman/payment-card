import React from 'react'
import Checked from '../Assets/images.png'

const Modal = ({ toggleModal }) => {
  return (
    <div className='modal-container'>
        <div>
             <img src={Checked} alt="" />
        </div>
       
        <h1>THANK YOU </h1>
        <p>we've added your card details</p>
      <button onClick={toggleModal} className='continue-btn'>Continue</button>
    </div>
  )
}

export default Modal
